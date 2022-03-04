


const mid10 = function (req, res, next){
    console.log(new Date())
    console.log(req.socket.remoteAddress)
    console.log(req.url)
    next ()
}
module.exports.mid10=mid10
