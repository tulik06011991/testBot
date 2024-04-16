const express = require('express');
const router = express.Router()
const {QuestionGet,
    UserAnswerPost} = require('../Controller/TestController')

router.post('/answer/post', UserAnswerPost);
router.get('/answer/get', QuestionGet)


module.exports = router