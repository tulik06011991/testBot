// app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config()
const auth = require('./Routes/AuthRoutes');
const adminQueistion = require('./Routes/AdminRoutes');
const testUser = require('./Routes/TestRoutes')
const users = require('./Routes/UserRoutes')
const path = require('path')


 console.log(__dirname)


const app = express();
app.use(express.json());
app.use(cors(
  {
      origin: "http://localhost:5173",
      credentials: true
  }
))



app.use('/auth', auth);
app.use('/questions', adminQueistion)
app.use('/test', testUser);
app.use('/foydalanuvchi', users);

 app.use(express.static(path.join(__dirname, '/frontend/dist')))

app.get('*', (req, res) =>res.sendFile(__dirname, '/frontend/dist/index.html'))

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('MongoDBga muvaffaqiyatli ulanish'))
  .catch((error) => console.error('MongoDBga ulanishda xatolik:', error));

PORT = process.env.PORT

app.listen(PORT, () => console.log('Server 3000 portda eshitishni boshladi'));
