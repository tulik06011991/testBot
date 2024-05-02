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
    <div><br /><br /><br /><br />
    <div class="container w-full ml-4">
        <h1 class="mb-8 text-center">
        Savollar ro'yxati
      </h1>
    
        <table class="text-left w-full">
            <thead class="bg-black flex text-white w-full">
                <tr class="flex w-full mb-4">
                    <th class="p-4 w-1/4">T/r</th>
                    <th class="p-4 w-1/4">Savol</th>
                    <th class="p-4 w-1/4">variant</th>
                    <th class="p-4 w-1/4">variant</th>
                    <th class="p-4 w-1/4">variant</th>
                    <th class="p-4 w-1/4">To'g'ri javob</th>
                </tr>
            </thead>
        
            <tbody class="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full" style={{"height": 50}}>
                <tr class="flex w-full mb-4">
                    <td class="p-4 w-1/4">Dogs</td>
                    <td class="p-4 w-1/4">Cats</td>
                    <td class="p-4 w-1/4">Birds</td>
                    <td class="p-4 w-1/4">Fish</td>
                    <td class="p-4 w-1/4">Fish</td>
                    <td class="p-4 w-1/4">Fish</td>
                </tr>
                
            </tbody>
        </table>
    </div></div>
  )
}

export default GetQuestions