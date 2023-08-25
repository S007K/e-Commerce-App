const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name Must Required!!!"]
    },
    maincategory:{
        type:String,
        required:[true,"Maincategory Must Required!!!"]
    },
    subcategory:{
        type:String,
        required:[true,"Subcategory Must Required!!!"]
    },
    brand:{
        type:String,
        required:[true,"Brand Must Required!!!"]
    },
    size:{
        type:String,
        required:[true,"Size Must Required!!!"]
    },
    color:{
        type:String,
        required:[true,"Color Must Required!!!"]
    },
    baseprice:{
        type:Number,
        required:[true,"Base Price Must Required!!!"]
    },
    discount:{
        type:Number,
        default:0
    },
    finalprice:{
        type:Number
    },
    stock:{
        type:String,
        default:"In Stock"
    },
    description:{
        type:String,
        default:"This is Sample Products"
    },
    pic1:{
        type:String,
        default:""
    },
    pic2:{
        type:String,
        default:""
    },
    pic3:{
        type:String,
        default:""
    },
    pic4:{
        type:String,
        default:""
    },
    status:{
        type:String,
        default:"Active"
    }
})
const Product = new mongoose.model("Product",ProductSchema)
module.exports = Product