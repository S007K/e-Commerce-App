const mongoose = require("mongoose")

const CheckoutSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:[true,"User Id Must Required!!!"],
    },
    paymentMode:{
        type:String,
        default:"COD"
    },
    paymentStatus:{
        type:String,
        default:"Pending"
    },
    orderStatus:{
        type:String,
        default:"Order is Placed"
    },
    rppid:{
        type:String,
        default:""
    },
    date:{
        type:String
    },
    totalAmount:{
        type:Number
    },
    shippingAmount:{
        type:Number
    },
    finalAmount:{
        type:Number
    },
    products:[
        {
            productId:{
                type:String
            },
            name:{
                type:String
            },
            color:{
                type:String
            },
            size:{
                type:String
            },
            price:{
                type:Number
            },
            qty:{
                type:Number
            },
            total:{
                type:Number
            },
            pic:{
                type:String
            }
        }
    ]
})
const Checkout = new mongoose.model("Checkout",CheckoutSchema)
module.exports = Checkout