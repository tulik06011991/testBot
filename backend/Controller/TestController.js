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
  
  const UserAnswerPost =  async (req, res) => {
    try {
      const { token, answer } = req.body;
      const decodedToken = jwt.verify(token, 'secret_key');
      const user = await User.findById(decodedToken.userId);
      if (!user) {
        return res.status(401).json({ message: 'Foydalanuvchi topilmadi' });
      }
  
      const question = await Question.findById(answer.questionId);
      if (!question) {
        return res.status(404).json({ message: 'Savol topilmadi' });
      }
  
      if (answer.answer === question.options[question.correctOptionIndex]) {
        user.score += 1;
        await user.save();
      }
  
      currentQuestionIndex++;
      if (currentQuestionIndex >= questions.length) {
        currentQuestionIndex = 0;
      }
      
      const nextQuestion = questions[currentQuestionIndex];
      res.json(nextQuestion);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  module.exports = {
    QuestionGet,
    UserAnswerPost
  }