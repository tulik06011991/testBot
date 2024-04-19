const Question = require('../Model/TestModel');
const express = require('express')
<<<<<<< HEAD
const User = require('../Model/UserModel');
const test = require('../Model/UserModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

 
=======
const  TestModel = require('../Model/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


>>>>>>> 5f143aa1d7cea90a649fe2908eda50e6af1b3dfd

const QuestionGet  = async (req, res) => {
    try {
      const questions = await Question.find();
      res.json(questions);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
<<<<<<< HEAD
  const UserAnswerPost = async (req, res) => {
    try {
      const { id, answer } = req.body;
      // const decodedToken = jwt.verify(token, 'secret_key');
      const user = await User.findById(req.params.id); // req.params.id orqali foydalanuvchi ID'sini olish
      if (!user) {
        return res.status(401).json({ message: 'Foydalanuvchi topilmadi' });
      }
      const name = user.username
      const time = Date.now()
  
      const questions = await Question.find();
      const question = await Question.findById(id);


      if (!question) {
        return res.status(404).json({ message: 'Savol topilmadi' });
      }
  
      // Foydalanuvchining bergan javobni tekshirish va baho qo'shish
      let score = 0
      if (answer === question.options[question.correctOptionIndex]) {
        
        score += 1;
       
      }

      const data = await test.create({
        user: name ,
        score: score,
        price: productPrice,
        purchaseDate: daqiqa
    });
  
      // Foydalanuvchining joriy savol indeksini o'zgartirish
      user.currentQuestionIndex += 1;
  
      // Agar barcha savollarga javob bermagan bo'lsa, savollar ro'yxati boshidan boshlanishi
      if (user.currentQuestionIndex >= questions.length) {
        user.currentQuestionIndex = 0;
      }
      
      // Keyingi savolni aniqlash va foydalanuvchiga qaytarish
      const nextQuestion = questions[user.currentQuestionIndex];
      res.json(nextQuestion);
    } catch (error) {
      res.status(500).json({ error: error.message });
=======



// Foydalanuvchi savolga javob berish va natijalarni hisoblash
const    UserAnswerPost =  async (req, res) => {
  try {
    const { userId, questionId, userAnswer } = req.body;

    // Savolni ma'lumotlar bazasidan olish
    const question = await Question.findById(questionId);

    if (!question) {
      return res.status(404).json({ error: 'Savol topilmadi' });
>>>>>>> 5f143aa1d7cea90a649fe2908eda50e6af1b3dfd
    }

    // Foydalanuvchi javobini tekshirish
    const isCorrect = userAnswer !== null && userAnswer === question.correctAnswer;

    // Natijani saqlash
    await TestModel.create({
      userId,
      questionId,
      userAnswer,
      correct: isCorrect
    });

    // Barcha savollarga to'g'ri javob berilganda, tekshirish natijasini qaytarish
    const userResults = await TestModel.find({ userId });
    const correctCount = userResults.filter(result => result.correct).length;

    // Agar foydalanuvchi barcha savollarga to'g'ri javob bermagan bo'lsa, 404 HTTP status kodi bilan foydalanuvchiga xabar berish
    if (correctCount === 0) {
      return res.status(404).json({ error: 'Foydalanuvchi hech bir savolga to\'g\'ri javob bermagan' });
    }

    // Foydalanuvchi barcha savollarga to'g'ri javob berib bo'lsa, umumiy ballar hisoblash
    const totalQuestions = userResults.length;
    const userScore = (correctCount / totalQuestions) * 100;

    // Natijalarni qaytarish
    res.json({ totalQuestions, correctCount, userScore });
  } catch (error) {
    console.error('Xatolik:', error);
    res.status(500).json({ error: error.message });
  }
};





  module.exports = {
    QuestionGet,
    UserAnswerPost
  }