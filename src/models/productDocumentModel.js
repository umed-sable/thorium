
const mongoose = require('mongoose');

const productDocumentSchema = new mongoose.Schema( {

    // _id: ObjectId("61951bfa4d9fe0d34da86344"),

    name: String,
    category: String,
    price: {
        type: Number,
        required: true
    },

    // emailId: String,
    // gender: {
    //     type: String,
    //     enum: ["male", "female", "LGBTQ"] //"falana" will give an error
    // },
    // age: Number,

}, { timestamps: true });

module.exports = mongoose.model('Product Documents', productDocumentSchema) //users