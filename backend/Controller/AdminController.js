// routes/questions.js

const Question = require('../Model/TestModel');

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




module.exports = {
    adminSavollarGet,
    adminSavollarPost
};
