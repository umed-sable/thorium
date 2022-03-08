
const UserDocumentModel= require("../models/userDocumentModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserDocumentModel.create(data)
    // console.log(req.newAtribute)
    res.send({msg: savedData})
}

module.exports.createUser= createUser
