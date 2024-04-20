const AuthModel = require('../Model/AuthModel');

// CREATE - Foydalanuvchi qo'shish
const createUser = async (req, res) => {
  try {
    const newUser = await AuthModel.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ - Barcha foydalanuvchilarni olish
const getUsers = async (req, res) => {
  try {
    const users = await AuthModel.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserId = async (req, res) => {
    try {
      const user = await AuthModel.findById(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

// UPDATE - Foydalanuvchi ma'lumotlarini yangilash
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await AuthModel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE - Foydalanuvchi o'chirish
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await AuthModel.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
  getUserId
};

