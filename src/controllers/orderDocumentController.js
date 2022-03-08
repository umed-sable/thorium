
const OrderDocumentModel= require("../models/orderDocumentModel")

const createOrder= async function (req, res) {
    let data= req.body;
    let savedData= await orderDocumentModel.create(data)
    // console.log(req.newAtribute)
    res.send({msg: savedData})
}

module.exports.createOrder= createOrder