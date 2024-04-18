// models/Question.js


const mongoose = require('mongoose');

const userResultSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' // Foydalanuvchi identifikatori (referensiya)
  },
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question' // Savol identifikatori (referensiya)
  },
  userAnswer: String, // Foydalanuvchi javobi
  correct: Boolean // To'g'ri javobni tekshirish
});

const Question = mongoose.model('UserResult', userResultSchema);

module.exports = Question;

// models/Question.js

