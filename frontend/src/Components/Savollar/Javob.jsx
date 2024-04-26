import React, { useContext, useState } from 'react';
import UserContext from '../userContext';
import { Link } from 'react-router-dom';


// Alloh o'zinga ming qadar shukr!   oxiri uddaladim
const Javob = () => {
  
  const { natija } = useContext(UserContext);


  const [data] = useState(natija);
  console.log(data)
  return (
    <>
        <br /><br /><br /><br />
      <div className='flex-col justify-center items-center w-8/12'>
        <h2 className='text-xl font-bold '> Savollarning umumiy soni:  {data.totalQuestions}</h2>
        <br /><br />
        <h1 className='text-xl font-bold'>

          To'g'ri javoblar soni: {data.totalQuestions}
        </h1>
        <br /><br />
        <h2 className='text-xl font-bold'> Umumiy balingiz : {data.userScore
        }</h2>

          <button className='bg-blue-300  py-2 px-4 hover:bg-blue-500 text-white'><Link to={'/menu'}>Orqaga</Link></button>
      </div>



    </>

  )
}

export default Javob