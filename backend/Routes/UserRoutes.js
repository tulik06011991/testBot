const express = require('express');
const router = express.Router()

const {createUser,
    getUsers,
    updateUser,
    deleteUser, getUserId} = require('../Controller/UserController');


router.post('/user', createUser );
router.get('/user', getUsers );
router.get('/user/:_id', getUserId );
router.put('/user/:_id', updateUser );
router.delete('/user/:_id', deleteUser );

module.exports = router