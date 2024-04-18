const Question = require('../Model/TestModel');
const express = require('express')
const User = require('../Model/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

let currentQuestionIndex = 0; 

const QuestionGet  = async (req, res) => {
    try {
      const questions = await Question.find();
      res.json(questions);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
<<<<<<< HEAD
  const express = require('express');
const router = express.Router();
const calculateScoreAndResult = require('./path/to/calculateScoreAndResult');
const Question = require('./path/to/Question');
const UserResult = require('./path/to/UserResult');

// POST so'rovi orqali foydalanuvchi natijalari va bali hisoblanadi
const  UserAnswerPost =  async (req, res) => {
  try {
    const { userId } = req.body;

    // Foydalanuvchi natijalari ma'lumotlar bazasidan olinadi
    const userResults = await UserResult.find({ userId }).populate('questionId');

    if (!userResults || userResults.length === 0) {
      return res.status(404).json({ error: 'Foydalanuvchi toʻplagan natijalar topilmadi' });
    }

    // Savollar olinadi
    const questions = await Question.find();

    let totalScore = 0;

    // Foydalanuvchi toʻplagan barcha natijalarni tekshirish
    for (const result of userResults) {
      const question = result.questionId;
      if (!question) continue; // Savol topilmagan bo'lsa davom etamiz
      if (result.userAnswer === question.correctAnswer) {
        totalScore += 1; // Foydalanuvchi toʻgʻri javob berdi
        result.correct = true; // Natija toʻgʻri
      } else {
        result.correct = false; // Natija notoʻgʻri
      }
    }

    // Foydalanuvchi balini hisoblash
    const totalQuestions = questions.length;
    const userScore = (totalScore / totalQuestions) * 100;

    // Natijalarni saqlash
    await Promise.all(userResults.map(result => result.save()));

    res.json({ totalScore: userScore, userResults });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



=======
  const UserAnswerPost = async (req, res) => {
    try {
      const { id, answer } = req.body;
      // const decodedToken = jwt.verify(token, 'secret_key');
      const user = await User.findById(req.params.id); // req.params.id orqali foydalanuvchi ID'sini olish
      if (!user) {
        return res.status(401).json({ message: 'Foydalanuvchi topilmadi' });
      }
  
      const questions = await Question.find();
      const question = await Question.findById(id);
      if (!question) {
        return res.status(404).json({ message: 'Savol topilmadi' });
      }
  
      // Foydalanuvchining bergan javobni tekshirish va baho qo'shish
      if (answer === question.options[question.correctOptionIndex]) {
        user.score += 1;
        await user.save();
      }
  
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
    }
  };
  
>>>>>>> de37d3577c72d1831ebc969a16e7e7afc1dd0a35

  module.exports = {
    QuestionGet,
    UserAnswerPost
  }