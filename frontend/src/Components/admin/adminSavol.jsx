import React, { useState } from 'react';
import axios from 'axios';

const AddQuestionForm = () => {
  const [title, setTitle] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [message, setMessage] = useState('');

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
      setMessage(response.data.message);
    } catch (error) {
      console.error('Xatolik:', error);
      setMessage('Savol qo\'shishda xatolik yuz berdi');
    }
  };

  return (
    <div>
      <br /><br /> <br /><br />
      <h2>Savol qo'shish</h2>
      <form onSubmit={handleSubmit}>
        <label>Savol:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        {options.map((option, index) => (
          <div key={index}>
            <label>{`Variant ${index + 1}:`}</label>
            <input
              type="text"
              value={option}
              onChange={(e) => handleChange(index, e.target.value)}
              required
            />
          </div>
        ))}
        <label>To'g'ri javob:</label>
        <select value={correctAnswer} onChange={(e) => setCorrectAnswer(e.target.value)} required>
          <option value="">Tanlang</option>
          {options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
        <button type="submit">Saqlash</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddQuestionForm;
