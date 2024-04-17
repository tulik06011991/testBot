// app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config()
const auth = require('./Routes/AuthRoutes');
const adminQueistion = require('./Routes/AdminRoutes');
const testUser = require('./Routes/TestRoutes')


const app = express();
app.use(express.json());
app.use(cors());
app.use('/auth', auth);
app.use('/ques', adminQueistion)
app.use('/test', testUser)

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('MongoDBga muvaffaqiyatli ulanish'))
  .catch((error) => console.error('MongoDBga ulanishda xatolik:', error));






PORT = process.env.PORT


app.listen(PORT, () => console.log('Server 3000 portda eshitishni boshladi'));
