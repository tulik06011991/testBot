import React, { useState, useEffect } from 'react';
import axios from 'axios';

function YourComponent() {
  const [userId, setUserId] = useState(''); // Foydalanuvchi ID sini saqlash uchun holat
  const [questions, setQuestions] = useState([]); // Savollar uchun holat
  const [userAnswers, setUserAnswers] = useState([]); // Foydalanuvchi javoblari uchun holat
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Joriy savol indeksi
  
  // useEffect orqali savollar olinadi
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('/api/questions');
        setQuestions(response.data);
      } catch (error) {
        console.error('Savollar olishda xato:', error);
      }
    };
    fetchQuestions();
  }, []);

  // POST so'rovi yuborish
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Javoblar obyekti yaratish
      const answers = { userId, userAnswers };
      
      // POST so'rovini yuborish
      const response = await axios.post('/api/submit', answers);
      console.log('Natijalar:', response.data);
      
      // Keyingi savolni yuklash
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } catch (error) {
      console.error('Xato:', error);
    }
  };
  
  // Foydalanuvchi javoblarni saqlash
  const handleAnswerSelection = (selectedOption) => {
    setUserAnswers(prevAnswers => [...prevAnswers, selectedOption]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userId">Foydalanuvchi ID:</label>
        <input 
          type="text" 
          id="userId" 
          value={userId} 
          onChange={(e) => setUserId(e.target.value)} 
        />
        
        {/* Ketma-ket savollar */}
        {currentQuestionIndex < questions.length ? (
          <div>
            <p>{questions[currentQuestionIndex].text}</p>
            {/* Variantlar */}
            {questions[currentQuestionIndex].options.map((option, index) => (
              <div key={index}>
                <input 
                  type="radio" 
                  id={`option-${index}`} 
                  name="option" 
                  value={option} 
                  onChange={() => handleAnswerSelection(option)} 
                />
                <label htmlFor={`option-${index}`}>{option}</label>
              </div>
            ))}
            <button type="submit">Keyingisi</button>
          </div>
        ) : (
          <p>Savollar tugadi!</p>
        )}
      </form>
    </div>
  );
}

export default YourComponent;


// {
//   "userId": "foydalanuvchiId",
//   "userAnswers": [
//     { "questionIndex": 0, "answer": "Option A" },
//     { "questionIndex": 1, "answer": "Option B" }
//     // Boshqa javoblar ...
//   ]
// }
