// routes/questions.js

const Question = require('../Model/TestModel');
 // UserResult modelini import qilish
const User = require('../Model/AuthModel'); 

// Savollarni qaytarish
const adminSavollarGet =  async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



// Savol qo'shish
const adminSavollarPost =  async (req, res) => {
  try {
    const { title, options, correctAnswer } = req.body;
    const question = new Question({ title, options, correctAnswer });
    await question.save();
    res.json(question);
  } catch (error) {
    console.error('Xatolik:', error);
    res.status(500).json({ error: 'Savol qo\'shishda xatolik yuz berdi' });
  }
};

// User modelini import qilish

// GET so'rovi uchun router
const getUsersInfo = async (req, res) => {
  try {
    // Barcha foydalanuvchilarni olish
    const users = await User.find();

    // Agar foydalanuvchilar topilmagan bo'lsa, 404 qaytariladi
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "Foydalanuvchilar topilmadi" });
    }

    // Foydalanuvchilarning ma'lumotlarini va ballarini qaytarish
    const usersInfo = [];
    for (const user of users) {
      const userId = user._id;
      const userResults = await Question.find({ userId }).populate('questionId');
      
      // Har bir foydalanuvchining bergan javoblari uchun to'g'ri yoki noto'g'ri javoblarini hisoblash
      const resultsWithCorrectness = userResults.map(result => ({
        ...result.toObject(),
        correct: result.userAnswer === result.questionId.correct // Berilgan javob to'g'ri bo'lsa true, aks holda false
      }));
      
      usersInfo.push({
        userId: userId,
        username: user.username,
        email: user.email,
        results: resultsWithCorrectness // Berilgan javoblar bilan birgalikda to'g'ri yoki noto'g'ri javoblarni qo'shamiz
      });
    }

    return res.status(200).json(usersInfo);
  } catch (error) {
    // Xatolikni qaytarish
    return res.status(500).json({ message: error.message });
  }
};






module.exports = {
    adminSavollarGet,
    adminSavollarPost,
    getUsersInfo
};
