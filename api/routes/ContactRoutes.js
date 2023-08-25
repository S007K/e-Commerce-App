const express = require("express")
const Contact = require("../models/Contact")

const router = express.Router()

router.post("/",async(req,res)=>{
    try{
        var data = new Contact(req.body)
        data.date = new Date()
        await data.save()
        res.send({result:"Done",message:"Record is Created!!!",data:data})
    }
    catch(error){
        if(error.errors.name)
        res.status(400).send({result:"Fail",message:error.errors.name.message})
        else if(error.errors.email)
        res.status(400).send({result:"Fail",message:error.errors.email.message})
        else if(error.errors.phone)
        res.status(400).send({result:"Fail",message:error.errors.phone.message})
        else if(error.errors.subject)
        res.status(400).send({result:"Fail",message:error.errors.subject.message})
        else if(error.errors.message)
        res.status(400).send({result:"Fail",message:error.errors.message.message})
        else
        res.status(500).send({result:"Fail",message:"Internal Server Error"})
    }
})

router.get("/",async(req,res)=>{
    try{
        var data = await Contact.find().sort({_id:-1})
        res.send({result:"Done",total:data.length,data:data})
    }
    catch(error){
        res.status(500).send({result:"Fail",message:"Internal Server Error"})
    }
})

router.get("/:_id",async(req,res)=>{
    try{
        var data = await Contact.findOne({_id:req.params._id})
        if(data)
        res.send({result:"Done",data:data})
        else
        res.status(404).send({result:"Fail",message:"No Record Found"})
    }
    catch(error){
        res.status(500).send({result:"Fail",message:"Internal Server Error"})
    }
})
router.put("/:_id",async(req,res)=>{
    try{
        var data = await Contact.findOne({_id:req.params._id})
        if(data){
            data.status = req.body.status??data.status
            await data.save()
            res.send({result:"Done",message:"Record is Updated!!!"})
        }
        else
        res.status(404).send({result:"Fail",message:"No Record Found"})
    }
    catch(error){
        if(error.keyValue)
        res.status(400).send({result:"Fail",message:"Name Must Be Unique"})
        else
        res.status(500).send({result:"Fail",message:"Internal Server Error"})
    }
})
router.delete("/:_id",async(req,res)=>{
    try{
        await Contact.deleteOne({_id:req.params._id})
        res.send({result:"Done",message:"Record is Deleted!!!"})            
    }
    catch(error){
        res.status(500).send({result:"Fail",message:"Internal Server Error"})
    }
})
module.exports = router