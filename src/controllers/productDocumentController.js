
const productDocumentModel= require("../models/productDocumentModel")

const createProduct= async function (req, res) {
    let data= req.body;
    let savedData= await productDocumentModel.create(data)
    // console.log(req.newAtribute)
    res.send({msg: savedData})
}

module.exports.createProduct= createProduct