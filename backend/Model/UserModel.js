const mongoose  = require('mongoose')



const userSchema = new mongoose.Schema({
    user: {
        type: String, 
    },
    score: {
        type: Number, 
    },
    time:{
        type: Date,
        default: Date.now
    },
    currentQuestionIndex:{
        type: Number
    }
   
  
   
},{timestamps: true}) 

 const TestModel =  mongoose.model('UsersTest', userSchema)
 module.exports = TestModel
