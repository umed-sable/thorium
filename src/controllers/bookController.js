
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

    // let id = book.auther;
    // let pubId = book.publisher;
    // let autherCheck = await authorModel.findone({_id:{$eq:id}});
    // let publisherCheck = await publishermodel.findone({_id:{$eq:pubId}})
    // console.log(id,pubId)
    // if (id === undefined || pubId === undefined){
    //     return res.send ("please provide publisher and author details.")
    // }else if (autherCheck === null || publisherCheck === null){
    //     return res.send ("author or publisher do not exist.")
    // }else {
    //     let bookCreated = await bookModel.create(book)
    //      return res.send ({data: bookCreated})
    // }
    

    
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
// }

// const getBooks= async function (req, res) {
//     let books = await bookModel.find().populate("author, publisher")
//     res.send({data: books})


}

// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author_id')
//     res.send({data: specificBook})

// }

module.exports.createBook= createBook
module.exports.getBooks= getBooks
// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
