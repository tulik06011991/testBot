const express = require('express');
const router = express.Router();

const {
    adminSavollarGet,
    adminSavollarPost
} = require('../Controller/AdminController');
const { verifyAdmin} = require('../VerifyToken/verifyToken')


router.get("/adminGet",  adminSavollarGet);
router.post('/adminPost', verifyAdmin,  adminSavollarPost);

module.exports = router