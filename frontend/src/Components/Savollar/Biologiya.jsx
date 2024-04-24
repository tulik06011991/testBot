import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../userContext';
import { useNavigate } from 'react-router-dom';



const Biologiya = () => {
  const { user } = useContext(UserContext);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(0).fill(''));
  const [message, setMessage] = useState('');
  const navigate = useNavigate()

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:3000/test/answer/get');
        setQuestions(response.data);
        setUserAnswers(Array(response.data.length).fill(''));
      } catch (error) {
        console.error('Xatolik:', error);
        setMessage('Savollarni yuklashda xatolik yuz berdi');
      }
    };
    fetchQuestions();
  }, []);

  const handleAnswerChange = (e) => {
    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[currentQuestionIndex] = e.target.value;
    setUserAnswers(updatedUserAnswers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/test/answer/post', {
        userId: user,
        questionId: questions[currentQuestionIndex]._id,
        userAnswer: userAnswers[currentQuestionIndex]
      });
      setMessage(response.data.message);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      console.log(response.data)
    } catch (error) {
      console.error('Xatolik:', error);
      setMessage('Javobni yuborishda xatolik yuz berdi');
    }
  };
  console.log(message)

  return (
    <div>
      <br /><br /><br /><br />
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
          <button type="submit" className='px-4 py-2 bg-blue-500'>Keyingi savol</button>
          {currentQuestionIndex === questions.length - 1 && (
            navigate('/javob') // "to" atributiga o'tish kerakli URL ni kiritish
          )}
        </form>
      ) : (
        <p>Savollar yuklanmoqda...</p>
      )}
      {message && <p>{message}</p>}
    </div>
  );
}

export default Biologiya;




// import axios from 'axios';
// import React, { useContext, useEffect, useState } from 'react';
// import UserContext from '../userContext';

// const Biologiya = () => {
//   const { user } = useContext(UserContext);
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [userAnswers, setUserAnswers] = useState(Array(0).fill(''));
//   const [message, setMessage] = useState('');
//   const [natija , setNatija] = useState(0)

//   useEffect(() => {
//     const fetchQuestions = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/test/answer/get');
//         setQuestions(response.data);
//         setUserAnswers(Array(response.data.length).fill(''));
//       } catch (error) {
//         console.error('Xatolik:', error);
//         setMessage('Savollarni yuklashda xatolik yuz berdi');
//       }
//     };
//     fetchQuestions();
//   }, []);

//   const handleAnswerChange = (e) => {
//     const updatedUserAnswers = [...userAnswers];
//     updatedUserAnswers[currentQuestionIndex] = e.target.value;
//     setUserAnswers(updatedUserAnswers);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3000/test/answer/post', {
//         userId: user,
//         questionId: questions[currentQuestionIndex]._id,
//         userAnswer: userAnswers[currentQuestionIndex]
//       });
//       setMessage(response.data.message);
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//       console.log(response.data)
//     } catch (error) {
//       console.error('Xatolik:', error);
//       setMessage('Javobni yuborishda xatolik yuz berdi');
//     }
//   };
//   console.log(message)

//   return (
//     <div>
//       <br /><br /><br /><br />
//       {questions.length > 0 ? (
//         <form onSubmit={handleSubmit}>
//           <h2>{questions[currentQuestionIndex].title}</h2>
//           {questions[currentQuestionIndex].options.map((option, index) => (
//             <div key={index}>
//               <input
//                 type="radio"
//                 id={option}
//                 name="answer"
//                 value={option}
//                 onChange={handleAnswerChange}
//                 checked={userAnswers[currentQuestionIndex] === option}
//               />
//               <label htmlFor={option}>{option}</label>
//             </div>
//           ))}
//           <button type="submit">Keyingi savol</button>
//         </form>
//       ) : (
//         <p>Savollar yuklanmoqda...</p>
//       )}
//       {message && <p>{message}</p>}
//     </div>
//   );
// }

// export default Biologiya;

