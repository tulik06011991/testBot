// models/Question.js
const mongoose = require('mongoose');

const AuthSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean, // Foydalanuvchining bergan javobning indeksi
    default: false // Agar foydalanuvchi hali javob bermagan bo'lsa, -1 qilib belgilaymiz
  }
});

const Auth = mongoose.model('Authorizatsiya', AuthSchema);

module.exports = Auth;
