
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const orderDocumentSchema = new mongoose.Schema( {

    // _id: ObjectId("61951bfa4d9fe0d34da86344"),

    userId: {type: ObjectId, ref:"user Documents"},
    productId: {type: ObjectId, ref:"product Documents"},
    amount: Number,
    isFreeAppUser: {type:Boolean, default:true},
    date:String

    // mobile: {
    //     type: String,

    //     required: true
    // },
    // gender: {
    //     type: String,
    //     enum: ["male", "female", "LGBTQ"] //"falana" will give an error
    // },
    // age: Number,
}, { timestamps: true });

module.exports = mongoose.model('Order Documents', orderDocumentSchema) //users