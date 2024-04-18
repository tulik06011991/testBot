const Question = require('../Model/TestModel');
const express = require('express')
const  UserResult = require('../Model/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



const QuestionGet  = async (req, res) => {
    try {
      const questions = await Question.find();
      res.json(questions);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

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




  module.exports = {
    QuestionGet,
    UserAnswerPost
  }