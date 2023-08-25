const mongoose = require("mongoose")

const BrandSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name Must Required!!!"],
        unique:true
    },
    status:{
        type:String,
        default:"Active"
    }
})
const Brand = new mongoose.model("Brand",BrandSchema)
module.exports = Brand