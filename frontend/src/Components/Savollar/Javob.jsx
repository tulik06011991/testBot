import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../userContext';
import { Link, useNavigate } from 'react-router-dom';

const Javob = () => {
  // UserContext dan natija ni olish
  const { natija } = useContext(UserContext);
  
  // data va setData state'ini o'rnating, ma'lumotlarni localStorage dan yuklash uchun ishlatiladi
  const [data, setData] = useState(() => {
    // Agar "javobData" nomli ma'lumotlar localStorage da mavjud bo'lsa, o'sha ma'lumotlarni qaytaradi
    // Aks holda, context dan olingan natija ma'lumotlari ishlatiladi
    const storedData = localStorage.getItem('javobData');
    return storedData ? JSON.parse(storedData) : natija;
  });

  // Saytga kirgandan so'ng, javob sahifasiga yo'naltiriladi
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/javob');
  }, []);

  // Ma'lumotlar o'zgarganda, localStorage ga yangi ma'lumotlarni saqlash
  useEffect(() => {
    localStorage.setItem('javobData', JSON.stringify(data));
  }, [data]);

  // "Orqaga" tugmasi bosilganda, localStorage dagi javob ma'lumotlarini o'chirib tashlash
  const handleClearLocalStorage = () => {
    localStorage.removeItem('javobData');
  };

  // JSX yordamida ma'lumotlar chiqariladi
  return (
    <>
      <br /><br /><br /><br />
      <div className='flex-col justify-center items-center w-8/12'>
        <h2 className='text-xl font-bold '> Savollarning umumiy soni: {data.totalQuestions}</h2>
        <br /><br />
        <h1 className='text-xl font-bold'>
          To'g'ri javoblar soni: {data.correctCount}
        </h1>
        <br /><br />
        <h2 className='text-xl font-bold'> Umumiy balingiz: {data.userScore}</h2>
        <button className='bg-blue-300 py-2 px-4 hover:bg-blue-500 text-white' onClick={handleClearLocalStorage}>
          <Link to={'/menu'}>Orqaga</Link>
        </button>
      </div>
    </>
  );
}

export default Javob;
