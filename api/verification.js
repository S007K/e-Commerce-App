const jwt = require("jsonwebtoken")

function verifyToken(req,res,next){
    var token = req.headers.authorization
    jwt.verify(token,process.env.SAULTKEYUSER,(error)=>{
        if(error)
        res.status(401).send({result:"Fail",message:"You Are Not an Authorized User to access this API!!!"})
        else
        next()
    })
}
function verifyTokenAdmin(req,res,next){    
    var token = req.headers.authorization
    jwt.verify(token,process.env.SAULTKEYADMIN,(error)=>{
        if(error)
        res.status(401).send({result:"Fail",message:"You Are Not an Authorized User to access this API!!!"})
        else
        next()
    })
}
module.exports = [verifyToken,verifyTokenAdmin]