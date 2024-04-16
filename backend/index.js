// app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config()


const app = express();
app.use(express.json());
app.use(cors())

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('MongoDBga muvaffaqiyatli ulanish'))
  .catch((error) => console.error('MongoDBga ulanishda xatolik:', error));









app.listen(3000, () => console.log('Server 3000 portda eshitishni boshladi'));
