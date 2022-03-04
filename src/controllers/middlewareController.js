

const myCode = async function (req, res){
    res.send({msg: "This is middleware test myCode"})
}


module.exports.myCode=myCode