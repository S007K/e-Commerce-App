const express = require("express");
const Maincategory = require("../models/Maincategory");
const [verifyToken,verifyTokenAdmin] = require("../verification")

const router = express.Router();



//router.get("/", async (req, res) => {
//  res.send({ result: "Done", message: "hellow from server" });
//});


router.post("/",verifyTokenAdmin,async(req,res)=>{
  try{
      var data = new Maincategory(req.body)
      await data.save()
      res.send({result:"Done",message:"Record is Created!!!",data:data})
  }
  catch(error){
      if(error.keyValue)
      res.status(400).send({result:"Fail",message:"Name Must Be Unique"})
      else if(error.errors.name)
      res.status(400).send({result:"Fail",message:error.errors.name.message})
      else
      res.status(500).send({result:"Fail",message:"Internal Server Error"})
  }
})

router.get("/",async(req,res)=>{
  try{
      var data = await Maincategory.find().sort({_id:-1})
      res.send({result:"Done",total:data.length,data:data})
  }
  catch(error){
      res.status(500).send({result:"Fail",message:"Internal Server Error"})
  }
})


router.get("/:_id",async(req,res)=>{
  try{
      var data = await Maincategory.findOne({_id:req.params._id})
      if(data)
      res.send({result:"Done",data:data})
      else
      res.status(404).send({result:"Fail",message:"No Record Found"})
  }
  catch(error){
      res.status(500).send({result:"Fail",message:"Internal Server Error"})
  }
})

router.put("/:_id",verifyTokenAdmin,async(req,res)=>{
  try{
      var data = await Maincategory.findOne({_id:req.params._id})
      if(data){
        data.name = req.body.name??data.name
        data.status = req.body.status??data.status
        await data.save()
        res.send({result:"Done",message:"Record is Updated!!!"})
      }
      
      else
      res.status(404).send({result:"Fail",message:"No Record Found"})
  }
  catch(error){
      res.status(500).send({result:"Fail",message:"Internal Server Error"})
  }
})

router.delete("/:_id",verifyTokenAdmin,async(req,res)=>{
  try{
      await Maincategory.deleteOne({_id:req.params._id})
      res.send({result:"Done",message:"Record is Deleted!!!"})            
  }
  catch(error){
      res.status(500).send({result:"Fail",message:"Internal Server Error"})
  }
})


module.exports = router;

