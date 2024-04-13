const express  = require("express")
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()



mongoose.connect(process.env.MONGO_URL).then(() =>console.log(`serverga ulandi: `)).catch((error) =>{
    console.log(error)
})

PORT  = process.env.PORT 

app.listen(PORT, console.log(` server running on ${PORT}`))