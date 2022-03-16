

const blogModel = require("../models/blogModel")
const AuthorModel = require("../models/AuthorModel")
const { status } = require("express/lib/response")


////     creating_Blog    /////


const createBlog = async (req, res) => {

try {
    let blog = req.body
    let authorId = req.body.authorId
    if (!authorId) {
        return res.status(400).send({ msg: "AuthorId Is required for Create Blogs" })
    }

    let author = await AuthorModel.findById(authorId)

    if (!author) {
        return res.status(404).send({ msg: "author not found" })
    }

    let blogCreated = await blogModel.create(blog)
    return res.status(201).send({ data: blogCreated })

} catch (err) {
        res.status(500).send({ msg: err.message })
    }
}


////     getting blog    ////


const getBlogs = async function (req, res) {

    try {

        let filters = req.query
        let avilableBlogs = await blogModel.find({ $and: [filters, { isDeleted: false }, { isPublished: true }] })
        
        if (avilableBlogs.length == 0) {
            return res.status(404).send({ status: false, msg: "No Book Found For Given info" })
        }
        return res.status(200).send({ status: true, msg: avilableBlogs })

    } catch (err) {
        res.status(500).send({ Error: err })
    }
}



////     Updating_Blog       ////


const updateBlogs = async (req, res) => {

try {

        let Id = req.params.blogId
        let ifExist = await blogModel.findById(Id)

        if (!ifExist) {
            return res.status(404).send({ status: false, msg: "" })
        }

        if (ifExist.isDeleted == false) {

            let data = req.body
            let newTitle = req.body.title
            let newBody = req.body.body
            let newTags = req.body.tags
            let newSubCategory = req.body.subcategory

            let updatedBlog = await blogModel.findByIdAndUpdate( { _id: Id },
                {
                    $set: { title: newTitle, body: newBody, isPublished: true, publishedAt: Date.now() },
                    $push: { tags: newTags, subcategory: newSubCategory }
                },
                { new: true } )

            console.log(updatedBlog)
            return res.status(200).send({ Status: true, data: updatedBlog })

        }

} catch (error) {
        res.status(500).send({ status: false, msg: error.message })
    }
}



////    Deleting_data     ////


const deleteById = async (req, res) => {

    try {

        let Id = req.params.blogId

        let ifExists = await blogModel.findById(Id)

        if (!ifExists) {
            return res.status(404).send({ Status: false, msg: "Data Not Found" })
        }

        if (ifExists.isDeleted !== true) {

            let deleteBlog = await blogModel.findByIdAndUpdate({ _id: Id }, { $set: { isDeleted: true, deletedAt: Date.now() } } ,{ new : true})
            return res.status(200).send()

        } else {
            return res.status(400).send({ status: false, msg: "alredy deleted" })
        }


    } catch (error) {
        res.status(500).send({ Err: error.message })
    }
}

///////     DeleteBy_QueryParams      /////

const deleteByParams = async (req, res) => {

    try {

        let filters = req.query
        let ifExists = await blogModel.find(filters)
        if (!ifExists) {
            return res.status(404).send({ Status: false, msg: "Data Not Found" })
        }

        if (ifExists.isDeleted !== true) {

            let deleteBlog = await blogModel.updateMany( { $and :[filters, { isDeleted: false } ] },
                { $set : { isDeleted : true , deletedAt : Date.now() } } , { new : true })
            return res.status(200).send()

        } else {
            return res.status(400).send({ status: false, msg: "alredy deleted" })
        }

    } catch (error) {
        res.status(500).send({ Err: error.message })
    }
}


module.exports = { createBlog, getBlogs, updateBlogs, deleteById, deleteByParams }
