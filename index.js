const express= require("express")
const cors= require("cors")
const { connection } = require("./config/db")
const { accountRouter } = require("./routes/account.route")
const { records } = require("./middlewares/records")

const app=express()

app.use(express.json())
app.use(cors({
    origin:"*"
}))



app.use("/account",accountRouter)

app.listen(process.env.PORT,async()=>{

    try{
await connection
console.log("database is connected")
    }
    catch(err)
    {
        console.log(err.message)
console.log("Can not connect to the database")
    }
    console.log("server is running")
})