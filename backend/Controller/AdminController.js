
const Question = require('../Model/TestModel');
const User = require('../Model/AuthModel'); 
const UsersBall = require('../Model/UserModel')




const adminSavollarGet =  async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



// Savol qo'shish
const adminSavollarPost = async (req, res) => {
  try {
    const { title, options, correctAnswer } = req.body;

    // Maydonlarni to'ldirishni tekshirish
    if (!title || !options || !correctAnswer) {
      throw new Error('Savol ma\'lumotlarini to\'liq kiriting');
    }

    // Savolni yaratish
    const question = new Question({ title, options, correctAnswer });

    // Savolni saqlash
    await question.save();

    // Saqlangan savolni javob qilish
    res.json(question);
  } catch (error) {
    console.error('Xatolik:', error);
    res.status(500).json({ error: 'Savol qo\'shishda xatolik yuz berdi' });
  }
};





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
      const userResults = await UsersBall.find({ userId }).populate('questionId');
      
<<<<<<< HEAD
      // Har bir foydalanuvchining bergan javoblari uchun to'g'ri yoki noto'g'ri javoblarini hisoblash
      const resultsWithCorrectness = userResults.map(result => ({
        ...result.toObject(),
        correct: result.userAnswer === result.questionId.correct // Berilgan javob to'g'ri bo'lsa true, aks holda false
      }));
      const totalCorrectAnswers = await UsersBall.countDocuments({ userId, correct: true });
=======
   
      


      const totalCorrectAnswers = await UsersBall.countDocuments({ userId, correct: { $ne: null } });
  
>>>>>>> 7ae1c1914866b63ed5119fc84d1560cfb3c78ec5
      
      usersInfo.push({
        userId: userId,
        username: user.username,
        email: user.email,
<<<<<<< HEAD
        savollar: resultsWithCorrectness.length,
        userball: totalCorrectAnswers 
      });
=======
        savollar: userResults.length,
        userball: totalCorrectAnswers 
       });
>>>>>>> 7ae1c1914866b63ed5119fc84d1560cfb3c78ec5
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
