import React, { useState, useEffect } from 'react';
import axios from 'axios';

function QuestionManager() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [submittedAnswers, setSubmittedAnswers] = useState({});
  
  useEffect(() => {
    // Saytdan savollar olish
    axios.get('/api/questions')
      .then(response => {
        setQuestions(response.data);
      })
      .catch(error => console.error('Savollar yuklanishda xatolik:', error));
  }, []);

  const handleAnswerSubmit = () => {
    const currentQuestion = questions[currentQuestionIndex];
    setUserAnswers(prevState => ({
      ...prevState,
      [currentQuestion._id]: currentQuestion.options[userAnswers[currentQuestion._id]]
    }));

    if (currentQuestionIndex === questions.length - 1) {
      // Agar bu so'nggi savol bo'lsa, backendga javoblar yuboriladi
      axios.post('/api/answers', userAnswers)
        .then(response => {
          setSubmittedAnswers(response.data);
        })
        .catch(error => console.error('Javoblar yuborishda xatolik:', error));
    } else {
      // Boshqa savolga o'tish
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    }
  };

  const handleOptionSelect = (questionId, optionIndex) => {
    setUserAnswers(prevState => ({
      ...prevState,
      [questionId]: optionIndex
    }));
  };

  return (
    <div>
      {questions.length > 0 && currentQuestionIndex < questions.length ? (
        <div>
          <h2>Savol {currentQuestionIndex + 1}:</h2>
          <h3>{questions[currentQuestionIndex].text}</h3>
          <ul>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <li key={index}>
                <label>
                  <input
                    type="radio"
                    checked={userAnswers[questions[currentQuestionIndex]._id] === index}
                    onChange={() => handleOptionSelect(questions[currentQuestionIndex]._id, index)}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
          <button onClick={handleAnswerSubmit}>Javob berish</button>
        </div>
      ) : (
        <div>
          <h2>Javoblar yuborildi!</h2>
          <ul>
            {Object.keys(submittedAnswers).map(questionId => (
              <li key={questionId}>
                <strong>{questions.find(question => question._id === questionId).text}</strong>: {submittedAnswers[questionId]}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default QuestionManager;
