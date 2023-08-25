const express = require("express")
const Newslatter = require("../models/Newslatter")
const [verifyToken,verifyTokenAdmin] = require("../verification")

const router = express.Router()

router.post("/",async(req,res)=>{
    try{
        var data = new Newslatter(req.body)
        await data.save()
        res.send({result:"Done",message:"Record is Created!!!",data:data})
    }
    catch(error){
        if(error.keyValue)
        res.status(400).send({result:"Fail",message:"Your Email Id is Already Registered!!!"})
        else if(error.errors.email)
        res.status(400).send({result:"Fail",message:error.errors.email.message})
        else
        res.status(500).send({result:"Fail",message:"Internal Server Error"})
    }
})

router.get("/",async(req,res)=>{
    try{
        var data = await Newslatter.find().sort({_id:-1})
        res.send({result:"Done",total:data.length,data:data})
    }
    catch(error){
        res.status(500).send({result:"Fail",message:"Internal Server Error"})
    }
})

router.delete("/:_id",verifyTokenAdmin,async(req,res)=>{
    try{
        await Newslatter.deleteOne({_id:req.params._id})
        res.send({result:"Done",message:"Record is Deleted!!!"})            
    }
    catch(error){
        res.status(500).send({result:"Fail",message:"Internal Server Error"})
    }
})
module.exports = router