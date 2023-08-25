const express = require("express")
const Razorpay = require("razorpay")

const [verifyToken,verifyTokenAdmin] = require("../verification")
const Checkout = require("../models/Checkout")
const User = require("../models/User")

const router = express.Router()


//Payment API
router.post("/orders",verifyToken, async (req, res) => {
    try {
        const instance = new Razorpay({
            key_id: process.env.RPKEYID,
            key_secret: process.env.RPSECRETKEY,
        });

        const options = {
            amount: req.body.amount * 100,
            currency: "INR"
        };

        instance.orders.create(options, (error, order) => {
            if (error) {
                console.log(error);
                return res.status(500).json({ message: "Something Went Wrong!" });
            }
            res.status(200).json({ data: order });
        });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error!" });
        console.log(error);
    }
});

router.put("/verify",verifyToken, async (req, res) => {
    try {
        var check = await Checkout.findOne({ _id: req.body.checkid })
        check.rppid = req.body.razorpay_payment_id
        check.paymentStatus = "Done"
        check.paymentMode="Net Banking"
        await check.save()
        // var user = await User.findOne({_id:check.userid})
        // let mailOption = {
        //     from: process.env.MAILSENDER,
        //     to: user.email,
        //     subject: "Payment Done !!! : Team Eshopper",
        //     text: `Thanks to Shop with Us\nYour Payment is Confirmed\nTrack Order in Profile Section!!!\nTeam Eshopper`
        // }
        // transporter.sendMail(mailOption, (error, data) => {
        //     if (error)
        //         console.log(error);
        // })
        res.status(200).send({ result: "Done" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error!" });
    }
});

router.post("/",verifyToken,async(req,res)=>{
    try{
        var data = new Checkout(req.body)
        data.date = new Date()
        await data.save()
        res.send({result:"Done",message:"Record is Created!!!",data:data})
    }
    catch(error){
        if(error.errors.userId)
        res.status(400).send({result:"Fail",message:error.errors.userId.message})
        else if(error.errors.totalAmount)
        res.status(400).send({result:"Fail",message:error.errors.totalAmount.message})
        else if(error.errors.shippingAmount)
        res.status(400).send({result:"Fail",message:error.errors.shippingAmount.message})
        else if(error.errors.finalAmount)
        res.status(400).send({result:"Fail",message:error.errors.finalAmount.message})
        else
        res.status(500).send({result:"Fail",message:"Internal Server Error"})
    }
})
router.get("/",verifyTokenAdmin,async(req,res)=>{
    try{
        var data = await Checkout.find().sort({_id:-1})
        res.send({result:"Done",total:data.length,data:data})
    }
    catch(error){
        res.status(500).send({result:"Fail",message:"Internal Server Error"})
    }
})
router.get("/user/:userId",verifyToken,async(req,res)=>{
    try{
        var data = await Checkout.find({userId:req.params.userId}).sort({_id:-1})
        res.send({result:"Done",total:data.length,data:data})
    }
    catch(error){
        res.status(500).send({result:"Fail",message:"Internal Server Error"})
    }
})

router.get("/:_id",verifyTokenAdmin,async(req,res)=>{
    try{
        var data = await Checkout.findOne({_id:req.params._id})
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
        var data = await Checkout.findOne({_id:req.params._id})
        if(data){
            data.paymentMode = req.body.paymentMode??data.paymentMode
            data.paymentStatus = req.body.paymentStatus??data.paymentStatus
            data.orderStatus = req.body.orderStatus??data.orderStatus
            data.rppid = req.body.rppid??data.rppid
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
router.delete("/:_id",verifyTokenAdmin,async(req,res)=>{
    try{
        await Checkout.deleteOne({_id:req.params._id})
        res.send({result:"Done",message:"Record is Deleted!!!"})            
    }
    catch(error){
        res.status(500).send({result:"Fail",message:"Internal Server Error"})
    }
})
module.exports = router