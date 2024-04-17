

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



// import React, { useState } from 'react';

// const RadioButtons = () => {
//   // State to keep track of selected radio button
//   const [selectedOption, setSelectedOption] = useState('');

//   // Function to handle radio button selection
//   const handleOptionChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   return (
//     <div >
      
//       <form action="/" method="post">
//       <br /><br /><br /><br />
//       <div className='text-gray-900 flex justify-center font-bold'>
//         <h1 className='text-gray text-xl '>Savollar ro'yxati</h1>
//       </div>
//     <div className="flex flex-col items-start py-12 ">
//       {/* Radio Button 1 */}
//       <label className="radio-container pl-8 text-xl tracking-tight w-full hover:bg-blue-200  py-8 shadow">
       
//         <input
//           type="radio"
//           value="option1"
//           checked={selectedOption === "option1"}
//           onChange={handleOptionChange}
//         />
//         <span className="checkmark ml-8"></span>
//         Option 1
//       </label>

//       {/* Radio Button 2 */}
//       <label className="radio-container text-xl pl-8 tracking-tight  w-full hover:bg-blue-200 py-8 shadow ">
   
//         <input 
//           type="radio"
//           value="option2"
//           checked={selectedOption === "option2"}
//           onChange={handleOptionChange} 
//         />
//         <span className="checkmark ml-8"></span>
//         Option 2
//       </label>

//       {/* Radio Button 3 */}
//       <label className="radio-container  text-xl pl-8 w-full tracking-tight hover:bg-blue-200 py-8 shadow">
        
//         <input
//           type="radio"
//           value="option3"
//           checked={selectedOption === "option3"}
//           onChange={handleOptionChange}
//         />
//         <span className="checkmark ml-8"></span>
//         Option 3
//       </label>

//       {/* Radio Button 4 */}
//       <label className="radio-container pl-8 w-full text-xl tracking-tight hover:bg-blue-200 py-8 shadow">
//         <input className='text-xl'
//           type="radio"
//           value="option4"
//           checked={selectedOption === "option4"}
//           onChange={handleOptionChange}
//           />
//         <span className="checkmark ml-8"></span>
//           Option 4
//       </label>
//     </div>
//     <div className='flex justify-center'>


//     <button type="submit" className='px-8 py-2 mr-8 rounded bg-gray-500 text-xl font-bold'>Keyingisi</button>
//     </div>
//     </form>
//     </div>
//   );
// };

// export default RadioButtons;
