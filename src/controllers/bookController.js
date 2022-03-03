
const { count } = require("console")
const authorModel = require("../models/newAuthor.js")
const bookModel= require("../models/newBook.js")
const publisherModel= require("../models/newPublisher.js")

const createBook= async function (req, res) {
    // let bookCreated = await bookModel.create(book)
    // res.send({data: bookCreated})
    let book = req.body
    let authorId = book.author
    let publisherId = book.publisher

    

    
    //validation a
    if(!authorId) return res.send('The request is not valid as the author details are required.')

    //validation b
    let author = await authorModel.findById(authorId)
    if(!author) return res.send('The request is not valid as no author is present with the given author id')

    //validation c
    if(!publisherId) return res.send('The request is not valid as the publisher details are required.') 

    //validation d
    let publisher = await publisherModel.findById(publisherId)
    if(!publisher) return res.send('The request is not valid as no publisher is present with the given publisher id')

    let bookCreated = await bookModel.create(book)
    return res.send({data: bookCreated})
}

const getBooks= async function (req, res) {
    let books = await bookModel.find().populate('author publisher')
    res.send({data: books})
 }

// const getBooks= async function (req, res) {
//     let books = await bookModel.find().populate("author, publisher")
//     res.send({data: books})
 const putBooks = async function(req,res){
    let publisherId= await publisherModel.find({name:{$in:["Penguin", "HarperCollins"]}}).select({_id:1})
    let arr=[]
    arr=publisherId.map(e=>e._id)
    let data= await bookModel.updateMany(
                {publisher:{$in:arr}},
                {isHardCover:true},
                {new:true}
    )  
    let authorId= await authorModel.find({rating:{$gt:3.5}}).select({_id:1})
    let arr1=[]
    arr1=authorId.map(e=>e._id)
    let data1= await bookModel.updateMany(
        {author:{$in:arr1}},
        {$inc:{price:+10}},
        {new:true})
    let latestBooks= await bookModel.find()
    res.send(latestBooks);

}
 



// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author_id')
//     res.send({data: specificBook})

// }

module.exports.createBook= createBook
module.exports.getBooks= getBooks
module.exports.putBooks= putBooks
// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
