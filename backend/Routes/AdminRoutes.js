const express = require('express');
const router = express.Router();

const {
    adminSavollarGet,
    adminSavollarPost
} = require('../Controller/AdminController');


router.get("/adminGet", adminSavollarGet);
router.post('/adminPost', adminSavollarPost)

module.exports = router