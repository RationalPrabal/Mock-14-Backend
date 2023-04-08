const fs= require("fs")

const records=(req,res,next)=>{
    if(req.method=="PATCH"){
        let data= req.body
        fs.appendFileSync("/record.txt",data)
    }
    next()
}

module.export={
    records
}