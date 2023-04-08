const express= require("express")
const { accountModel } = require("../models/account.model")

const accountRouter= express.Router()

//! create account


accountRouter.post("/create",async(req,res)=>{
   
    try{
        req.body.key=false
        let userData= new accountModel(req.body)
        await userData.save()
        res.send("account has been opened")

}
catch{
res.send("can not open the account")
}
})

accountRouter.patch("/updateKyc",async(req,res)=>{
   
    try{
        
        await accountModel.findByIdAndUpdate(req.body.id)
        res.send("kyc has been done")

}
catch{
res.send("kyc not succeded")
}
})

accountRouter.patch("/transaction",async(req,res)=>{
   
    try{
        
        await accountModel.findByIdAndUpdate(req.body.id)
        res.send("kyc has been done")

}
catch{
res.send("kyc not succeded")
}
})

accountRouter.delete("/closeAccount",async(req,res)=>{
   
    try{
        
        await accountModel.findByIdAndDelete(req.body.id)
        res.send("Account deleted Successfully")

}
catch{
res.send("could not delete the account")
}
})
module.exports={
    accountRouter
}