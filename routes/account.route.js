const express= require("express")
const { accountModel } = require("../models/account.model")

const accountRouter= express.Router()

//!get account
accountRouter.get("/:id",async(req,res)=>{
    try{
      let {id}= req.params
let user=await accountModel.findById(id)
res.send(user)
    }
    catch(e){
res.send(e)
    }
})

//! create account


accountRouter.post("/create",async(req,res)=>{
   
    try{
        req.body.key=false
        let userData= new accountModel(req.body)
     let data=   await userData.save()
        res.send(data)

}
catch{
res.send("can not open the account")
}
})

accountRouter.patch("/updateKyc/:_id",async(req,res)=>{
   let {_id}= req.params
    try{
        
        await accountModel.findByIdAndUpdate(_id,req.body)
        res.send("details has been updated")

}
catch{
res.send("could not update the details")
}
})

accountRouter.patch("/transaction/:_id",async(req,res)=>{
    let {_id}= req.params
    try{
        
        await accountModel.findByIdAndUpdate(_id,req.body)
        res.send("balance has been updated")

}
catch{
res.send("can not update the balance")
}
})

accountRouter.patch("/transfer/:_id",async(req,res)=>{
    let {_id}= req.params
    let {email,balanceReceiver,balanceSender}= req.body
    try{
        
        let user= await accountModel.find({email})
        if(user.length){
            await accountModel.findByIdAndUpdate(_id,{balance:balanceSender})
            await accountModel.findByIdAndUpdate(user[0]._id,{balance:balanceReceiver})

            res.send("balance has been updated")
        }
        else {
            res.send("Please enter valid account details")
        }

}
catch{
res.send("can not update the balance")
}
})
accountRouter.delete("/closeAccount/:_id",async(req,res)=>{

   let {_id}=req.params
    try{
        
        await accountModel.findByIdAndDelete(_id)
        console.log("ue")
        res.send("Account deleted Successfully")

}
catch{
res.send("could not delete the account")
}
})
module.exports={
    accountRouter
}