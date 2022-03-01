const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type: String,
        required: true
    }, 
   
    // isPublished: Boolean,
    price: {
        indianPrice: String,
        europePrice: String
    },
    year:{
        type: Number,
        default: 2021
    },
    tags : [String],
    autherName:String,
    totalPages:Number,
    stockAvailable:Boolean
    // sales: {type: Number, default: 10}
}, { timestamps: true });


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
