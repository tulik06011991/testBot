import axios from 'axios';
import React, { useEffect, useState } from 'react'

const GetQuestions = () => {

    const [data, setData] = useState([]);
    const [message, setMessage] = useState('')
    useEffect(() => {
        const fetchQuestions = async () => {
          try {
            const response = await axios.get('http://localhost:3000/test/answer/get');
           setData(response.data)
           console.log(response.data)
          } catch (error) {
            console.error('Savollarni yuklashda xatolik:', error);
            setMessage('Savollarni yuklashda xatolik yuz berdi');
          }
        };
        fetchQuestions();
      }, []);

  return (
    <div><br /><br /><br /><br /><h1>salom</h1></div>
  )
}

export default GetQuestions