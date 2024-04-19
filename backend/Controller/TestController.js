const Question = require('../Model/TestModel');
const  TestModel = require('../Model/UserModel');
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





// Foydalanuvchi savolga javob berish va natijalarni hisoblash
const    UserAnswerPost =  async (req, res) => {
  try {
    const { userId, questionId, userAnswer } = req.body;

    // Savolni ma'lumotlar bazasidan olish
    const question = await Question.findById(questionId);

    if (!question) {
      return res.status(404).json({ error: 'Savol topilmadi' });

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
};
