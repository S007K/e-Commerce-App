const express = require("express")
const multer = require("multer")
const fs = require("fs")
const [verifyToken,verifyTokenAdmin] = require("../verification")

const Product = require("../models/Product")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/products')
    },
    fieldSize: 104857600,
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})

const upload = multer({ storage: storage })
const router = express.Router()

router.post("/",verifyTokenAdmin, upload.fields([
    { name: "pic1", maxCount: 1 },
    { name: "pic2", maxCount: 1 },
    { name: "pic3", maxCount: 1 },
    { name: "pic4", maxCount: 1 }
]), async (req, res) => {
    try {
        var data = new Product(req.body)
        data.finalprice = Math.round(parseInt(req.body.baseprice) - parseInt(req.body.baseprice) * parseInt(req.body.discount) / 100)
        if (req.files && req.files.pic1)
            data.pic1 = req.files.pic1[0].filename
        if (req.files && req.files.pic2)
            data.pic2 = req.files.pic2[0].filename
        if (req.files && req.files.pic3)
            data.pic3 = req.files.pic3[0].filename
        if (req.files && req.files.pic4)
            data.pic4 = req.files.pic4[0].filename
        await data.save()
        res.send({ result: "Done", message: "Record is Created!!!", data: data })
    }
    catch (error) {
        console.log(error);
        if (error.errors.name)
            res.status(400).send({ result: "Fail", message: error.errors.name.message })
        else if (error.errors.maincategory)
            res.status(400).send({ result: "Fail", message: error.errors.maincategory.message })
        else if (error.errors.subcategory)
            res.status(400).send({ result: "Fail", message: error.errors.subcategory.message })
        else if (error.errors.brand)
            res.status(400).send({ result: "Fail", message: error.errors.brand.message })
        else if (error.errors.size)
            res.status(400).send({ result: "Fail", message: error.errors.size.message })
        else if (error.errors.color)
            res.status(400).send({ result: "Fail", message: error.errors.color.message })
        else if (error.errors.baseprice)
            res.status(400).send({ result: "Fail", message: error.errors.baseprice.message })
        else
            res.status(500).send({ result: "Fail", message: "Internal Server Error" })
    }
})

router.get("/", async (req, res) => {
    try {
        var data = await Product.find().sort({ _id: -1 })
        res.send({ result: "Done", total: data.length, data: data })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error" })
    }
})

router.get("/:_id", async (req, res) => {
    try {
        var data = await Product.findOne({ _id: req.params._id })
        if (data)
            res.send({ result: "Done", data: data })
        else
            res.status(404).send({ result: "Fail", message: "No Record Found" })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error" })
    }
})
router.put("/:_id",verifyTokenAdmin, upload.fields([
    { name: "pic1", maxCount: 1 },
    { name: "pic2", maxCount: 1 },
    { name: "pic3", maxCount: 1 },
    { name: "pic4", maxCount: 1 }
]), async (req, res) => {
    try {
        var data = await Product.findOne({ _id: req.params._id })
        if (data) {
            data.name = req.body.name ?? data.name
            data.maincategory = req.body.maincategory ?? data.maincategory
            data.subcategory = req.body.subcategory ?? data.subcategory
            data.brand = req.body.brand ?? data.brand
            data.size = req.body.size ?? data.size
            data.color = req.body.color ?? data.color
            data.stock = req.body.stock ?? data.stock
            data.description = req.body.description ?? data.description
            data.baseprice = req.body.baseprice ?? data.baseprice
            data.discount = req.body.discount ?? data.discount
            data.finalprice = Math.round(parseInt(data.baseprice) - parseInt(data.baseprice) * parseInt(data.discount) / 100)
            data.status = req.body.status ?? data.status

            try {
                if (req.files.pic1 && data.pic1) {
                    fs.unlinkSync(`public/products/${data.pic1}`)
                }
            } catch (error) { }
            if(req.files && req.files.pic1)
            data.pic1 = req.files.pic1[0].filename

            try {
                if (req.files.pic2 && data.pic2) {
                    fs.unlinkSync(`public/products/${data.pic2}`)
                }
            } catch (error) { }
            if(req.files && req.files.pic2)
            data.pic2 = req.files.pic2[0].filename

            try {
                if (req.files.pic3 && data.pic3) {
                    fs.unlinkSync(`public/products/${data.pic3}`)
                }
            } catch (error) { }
            if(req.files && req.files.pic3)
            data.pic3 = req.files.pic3[0].filename

            try {
                if (req.files.pic4 && data.pic4) {
                    fs.unlinkSync(`public/products/${data.pic4}`)
                }
            } catch (error) { }
            if(req.files && req.files.pic4)
            data.pic4 = req.files.pic4[0].filename

            await data.save()
            res.send({ result: "Done", message: "Record is Updated!!!" })
        }
        else
            res.status(404).send({ result: "Fail", message: "No Record Found" })
    }
    catch (error) {
        if (error.keyValue)
            res.status(400).send({ result: "Fail", message: "Name Must Be Unique" })
        else
            res.status(500).send({ result: "Fail", message: "Internal Server Error" })
    }
})
router.delete("/:_id",verifyTokenAdmin, async (req, res) => {
    try {
        var data = await Product.findOne({ _id: req.params._id })
        try {
            fs.unlinkSync(`public/products/${data.pic1}`)
        } catch (error) { }
        try {
            fs.unlinkSync(`public/products/${data.pic2}`)
        } catch (error) { }
        try {
            fs.unlinkSync(`public/products/${data.pic3}`)
        } catch (error) { }
        try {
            fs.unlinkSync(`public/products/${data.pic4}`)
        } catch (error) { }
        await data.deleteOne()
        res.send({ result: "Done", message: "Record is Deleted!!!" })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error" })
    }
})

router.post("/search",async(req,res)=>{
    try{
        var data = await Product.find({
            $or:[
               {name:{$regex:`.*${req.body.search}.*`,$options:"i"}},
               {maincategory:{$regex:`.*${req.body.search}.*`,$options:"i"}},
               {subcategory:{$regex:`.*${req.body.search}.*`,$options:"i"}},
               {brand:{$regex:`.*${req.body.search}.*`,$options:"i"}},
               {color:{$regex:`.*${req.body.search}.*`,$options:"i"}},
               {size:{$regex:`.*${req.body.search}.*`,$options:"i"}},
               {stock:{$regex:`.*${req.body.search}.*`,$options:"i"}},
               {description:{$regex:`.*${req.body.search}.*`,$options:"i"}}
            ]
        })
        res.send({result:"Done",count:data.length,data:data})
    }
    catch(error){
        res.status(500).send({result:"Fail",message:"Internal Server Error!!!"})
    }
})

router.post("/search",async(req,res)=>{
    try{
        var data = await Product.find({
            $or:[
                {name:{$regex:`.*${req.body.search},*`,$options:"1"}}
            ]
        })
        res.send({result:"Done",count:data.length,data:data})

    }
    catch(error){
        res.status(500).send({result:"fail",message:"Internal server error"})
    }
})
module.exports = router