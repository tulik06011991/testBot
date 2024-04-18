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
  

  module.exports = {
    QuestionGet,
    UserAnswerPost
  }