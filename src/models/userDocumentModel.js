
const mongoose = require('mongoose');

const userDocumentSchema = new mongoose.Schema( {

    // _id: ObjectId("61951bfa4d9fe0d34da86829"),

    name: String,
    balance: {
        type:Number,
        default:100 
    },
    address: String,
    age: Number,
    gender: {
        type: String,
        enum: ["male", "female", "other"]  //"falana" will give an error
    },
    isFreeAppUser: {
        type : Boolean,
        default : "false"
    },

    //  mobile: {
    //     type: String,
    //     required: true
    // },

    
} ,{ timestamps: true });

module.exports = mongoose.model('User Documents', userDocumentSchema) //users