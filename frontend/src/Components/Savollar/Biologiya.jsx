import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [message, setMessage] = useState('');
  
  useEffect(() => {
    // Savollarni serverdan olish
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:3000/test/answer/post');
        setQuestions(response.data.questions);
        // Foydalanuvchi javoblari uchun bo'sh massivni yaratish
        setUserAnswers(Array(response.data.questions.length).fill(''));
      } catch (error) {
        console.error('Xatolik:', error);
        setMessage('Savollarni yuklashda xatolik yuz berdi');
      }
    };
    fetchQuestions();
  }, []);
  
  // const handleAnswerChange = (e) => {
  //   const updatedUserAnswers = [...userAnswers];
  //   updatedUserAnswers[currentQuestionIndex] = e.target.value;
  //   setUserAnswers(updatedUserAnswers);
  // };
  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     // Foydalanuvchi javoblarni serverga yuborish
  //     const response = await axios.post('/api/submit-answer', {
  //       userId: 'user_id', // Foydalanuvchi identifikatori
  //       questionId: questions[currentQuestionIndex]._id,
  //       userAnswer: userAnswers[currentQuestionIndex]
  //     });
  //     setMessage(response.data.message);
  //     // Keyingi savolga o'tish
  //     setCurrentQuestionIndex(currentQuestionIndex + 1);
  //   } catch (error) {
  //     console.error('Xatolik:', error);
  //     setMessage('Javobni yuborishda xatolik yuz berdi');
  //   }
  // };

  return (
    <div>
      {questions.length > 0 ? (
        <form onSubmit={handleSubmit}>
          <h2>{questions[currentQuestionIndex].title}</h2>
          {questions[currentQuestionIndex].options.map((option, index) => (
            <div key={index}>
              <input
                type="radio"
                id={option}
                name="answer"
                value={option}
                onChange={handleAnswerChange}
                checked={userAnswers[currentQuestionIndex] === option}
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
          <button type="submit">Keyingi savol</button>
        </form>
      ) : (
        <p>Savollar yuklanmoqda...</p>
      )}
      {message && <p>{message}</p>}
    </div>
  );
};

export default Quiz;
