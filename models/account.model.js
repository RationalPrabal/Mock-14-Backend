const mongoose= require("mongoose")

const accountSchema= mongoose.Schema({
    name:String,
    gender:String,
    dob:String,
    email:String,
    mobile_number:Number,
    balance:Number,
    aadhar:Number,
    pan:String,
    kyc:Boolean
})

const accountModel= mongoose.model("account",accountSchema)

module.exports={
    accountModel
}