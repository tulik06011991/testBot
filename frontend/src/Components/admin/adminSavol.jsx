import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AddQuestionForm = () => {
  const [title, setTitle] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [message, setMessage] = useState('');
  const [userAnswers, setUserAnswers] = useState(Array(0).fill(''));

  const handleChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };



  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/questions/adminPost', {
        title,
        options,
        correctAnswer
      });
      if(response){

        // setUserAnswers(Array(response.data.length).fill(''))
      }
      console.log(response)
      setMessage(response.data.message);
    } catch (error) {
      console.error('Xatolik:', error);
      setMessage('Savol qo\'shishda xatolik yuz berdi');
    }
  };


  return (
    <div className='bg-gray-300 w-full h-screen'>
      <br /><br /> <br /><br />
      <h2 className='d-flex items-center text-2xl font-bold ml-4'>Savol qo'shish</h2>
      <form onSubmit={handleSubmit} >
        <label className='ml-8 font-bold py-2 px-2 mx-auto text-xl'>Savol:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
         className='w-10/12 mx-auto px-2 py-2 my-4  mr-2 ml-2 rounded'/>
        {options.map((option, index) => (
          <div key={index} >
            <label className='ml-8'>{`Variant ${index + 1}:`}</label>
            <input
              type="text"
              value={option}
              onChange={(e) => handleChange(index, e.target.value)}
              required
             className=' ml-8 my-4 mx-auto w-2/4 py-2 rounded'/>
          </div>
        ))}
        <label className='mr-4 font-bold ml-8'>To'g'ri javob:</label>
        <select value={correctAnswer} onChange={(e) => setCorrectAnswer(e.target.value)} required  className='my-4 mr-8 py-2 px-2 '>
          <option className='text-center m-4' value="">Tanlang</option>
          {options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
        <button type="submit" className='bg-blue-500 rounded py-2 px-4 hover:bg-gray-700 cursor-pointer text-white'>Saqlash</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddQuestionForm;
