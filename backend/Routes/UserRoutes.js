const express = require('express');
const router = express.Router()

const {createUser,
    getUsers,
    updateUser,
    deleteUser, getUserId, getJavobId} = require('../Controller/UserController');
    const { verifyAdmin} = require('../VerifyToken/verifyToken')


router.post('/user',   createUser );
router.get('/users',    getUsers );
router.get('/user/:id',   getUserId );
router.put('/user/:id',   updateUser );
router.delete('/user/:id',  deleteUser );
router.get('/javob/:userId',   getJavobId );

module.exports = router