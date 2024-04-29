const express = require('express');
const router = express.Router();

const {
    adminSavollarGet,
    adminSavollarPost, getUsersInfo
} = require('../Controller/AdminController');
const { verifyAdmin} = require('../VerifyToken/verifyToken')


router.get("/adminGet",  adminSavollarGet);
router.get("/adminInfoUser",  getUsersInfo);
router.post('/adminPost', verifyAdmin,  adminSavollarPost);

module.exports = router