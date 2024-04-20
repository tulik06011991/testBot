const express = require('express');
const router = express.Router()

const {createUser,
    getUsers,
    updateUser,
    deleteUser, getUserId} = require('../Controller/UserController');


router.post('/user', createUser );
router.get('/user', getUsers );
router.get('/user/:id', getUserId );
router.put('/user/:id', updateUser );
router.delete('/user/:id', deleteUser );

module.exports = router