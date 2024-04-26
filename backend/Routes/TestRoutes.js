const express = require('express');
const router = express.Router()
const {QuestionGet,
    UserAnswerPost, deleteAnswers,
    deleteQuestions} = require('../Controller/TestController')

router.post('/answer/post', UserAnswerPost);
router.get('/answer/get', QuestionGet);
router.delete('/deleteSavollar', deleteQuestions);
router.delete('/deleteJavoblar', deleteAnswers);


module.exports = router