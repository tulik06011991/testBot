import React, { useState } from 'react';
import axios from 'axios';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [userId, setUserId] = useState('');
  const [results, setResults] = useState([]);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get('/api/questions');
      setQuestions(response.data);
    } catch (error) {
      console.error('Xatolik:', error);
    }
  };

  const handleSubmitAnswer = async () => {
    try {
      const questionId = questions[currentQuestionIndex].id;
      const response = await axios.post('/api/submit-answer', {
        userId,
        questionId,
        userAnswer: selectedOption
      });
      const result = response.data;
      setResults([...results, result]);
      setSelectedOption('');
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } catch (error) {
      console.error('Xatolik:', error);
    }
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <h1>Imtihon</h1>
      {currentQuestionIndex < questions.length ? (
        <div>
          <h2>Savol {currentQuestionIndex + 1}:</h2>
          <p>{questions[currentQuestionIndex].text}</p>
          <form>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={`option-${index}`}
                  name="option"
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleOptionChange}
                />
                <label htmlFor={`option-${index}`}>{option}</label>
              </div>
            ))}
            <button type="button" onClick={handleSubmitAnswer}>Javob bering</button>
          </form>
        </div>
      ) : (
        <div>
          <h2>Imtihon tugadi!</h2>
          <h3>Natijalar:</h3>
          <ul>
            {results.map((result, index) => (
              <li key={index}>
                Savol {index + 1}: {result.message}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Quiz;
