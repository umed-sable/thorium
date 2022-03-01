
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String,
    author_id : {
        type:Number,
        required: true
    },
    price : Number,
    rating : Number
},
{timestamps:true})


module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
