
const userDocumentModel=require("../models/userDocumentModel")

let middle=function(req,res,next){
    let data=req.headers.isfreeappuser
    console.log(data)  
    if(data===undefined){
        return res.send("request is missing a mandatory header")
    }
    next();
}

const middle1=async function(res,req,next){
   let data = req.headers.isfreeappuser

   if(data===undefined){
       let userId1=req.body.userId;
       let user=await userDocumentModel.findById(userId1);
       if (user===null){
           return res.send({msg:"user not valid"})
       }
       let productId1 = req.body.productId;
       let product=await productDocumentModel.findById(productId1);
       if (product===null){
           return res.send({msg:"product not valid"})
       }
   
   }next()

}



module.exports.middle=middle
module.exports.middle1=middle1