const mongoose  = require('mongoose')



const userSchema = new mongoose.Schema({
    user: {
        type: String, 
        required: true,
        unique: true

    },
    score: {
        type: Number, 
        

    },
   
  
   
},{timestamps: true}) 

 const TestModel =  mongoose.model('UsersTest', userSchema)
 module.exports = TestModel
