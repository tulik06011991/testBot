// models/Question.js
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  options: {
    type: [String],
    required: true
  },
  correctOptionIndex: {
    type: Number,
    required: true
  },
  userAnswerIndex: {
    type: Number, // Foydalanuvchining bergan javobning indeksiu
    default: -1 // Agar foydalanuvchi hali javob bermagan bo'lsa, -1 qilib belgilaymiz
  }
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;

// models/Question.js

