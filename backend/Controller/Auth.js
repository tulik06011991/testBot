const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../Model/AuthModel');






const register = async (req, res) => {
    try {
      const { username, password, isAdmin } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      await User.create({ username, password: hashedPassword, isAdmin });
      res.status(201).json({ message: 'Foydalanuvchi muvaffaqiyatli ro\'yxatdan o\'tdi' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const login =  async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Noto\'g\'ri foydalanuvchi nomi yoki parol' });
      }
      const token = jwt.sign({ userId: user._id, isAdmin: user.isAdmin }, 'secret_key', { expiresIn: '1h' });
      res.json({ token, isAdmin: user.isAdmin });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  module.exports = {
    register,
    login
  }