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
    const { text, options, correctOptionIndex } = req.body;
    const question = new Question({ text, options, correctOptionIndex });
    await question.save();
    res.status(201).json({ message: 'Savol qo\'shildi', question });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
    adminSavollarGet,
    adminSavollarPost
}
