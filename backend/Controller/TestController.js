const Question = require('../Model/TestModel');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const TestModel = require('../Model/UserModel');
console.log(TestModel)






const QuestionGet = async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};






// Foydalanuvchi savolga javob berish va natijalarni hisoblash
const UserAnswerPost = async (req, res) => {
  try {
    const { userId, questionId, userAnswer } = req.body;

    // Savolni ma'lumotlar bazasidan olish
    const question = await Question.findById(questionId);

    if (!question) {
      return res.status(404).json({ error: 'Savol topilmadi' });
    }

    // Foydalanuvchi javobini tekshirish

    // Agar foydalanuvchi savol variantlaridan birini tanlamagan bo'lsa, 404 HTTP status kodi bilan foydalanuvchiga xabar berish
    if (userAnswer === null || userAnswer.length === 0) {
      return res.status(404).json({ error: 'Foydalanuvchi hech bir variantni tanlamagan' });
    }

    const isCorrect = userAnswer === question.correctAnswer;


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




// Barcha ma'lumotlarni o'chirish
const deleteAnswers =  (req, res) => {
  TestModel .deleteMany({})
    .then(() => {
      console.log('Barcha ma\'lumotlar muvaffaqiyatli o\'chirildi');
      res.status(200).json({ message: 'Barcha ma\'lumotlar muvaffaqiyatli o\'chirildi' });
    })
    .catch((err) => {
      console.error('Ma\'lumotlarni o\'chirishda xatolik:', err);
      res.status(500).json({ error: 'Server xatosi, ma\'lumotlar o\'chirilmadi' });
    });
};


const deleteQuestions =  (req, res) => {
  Question.deleteMany({})
    .then(() => {
      console.log('Barcha ma\'lumotlar muvaffaqiyatli o\'chirildi');
      res.status(200).json({ message: 'Barcha ma\'lumotlar muvaffaqiyatli o\'chirildi' });
    })
    .catch((err) => {
      console.error('Ma\'lumotlarni o\'chirishda xatolik:', err);
      res.status(500).json({ error: 'Server xatosi, ma\'lumotlar o\'chirilmadi' });
    });
};







module.exports = {
  QuestionGet,
  UserAnswerPost,
  deleteAnswers,
  deleteQuestions
};
