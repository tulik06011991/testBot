const mongoose  = require('mongoose')



const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: true,
        unique: true

    },
    email: {
        type: String, 
        required: true,
        unique: true

    },
   
    password: {
        type: String, 
        required: true

    },
    score:{
        type: Number
        
    },
   
    isAdmin: {
        type: Boolean ,
        default : false

    },
   
},{timestamps: true}) 

 const hotelModel =  mongoose.model('Users', userSchema)
 module.exports = hotelModel
