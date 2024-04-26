import React, { useContext, useState } from 'react';
import UserContext from '../userContext';

// Alloh o'zinga ming qadar shukr!   oxiri uddaladim
const Javob = () => {
  const { natija } = useContext(UserContext);

  const [data] = useState(natija);
  console.log(data)
  return (
    <>
        <br /><br /><br /><br />
      <div className='flex-col justify-center items-center w-8/12'>
        <h2 className='text-xl font-bold'> Savollarning umumiy soni:  {data.totalQuestions}</h2>
        <br /><br />
        <h1 className='text-xl font-bold'>

          To'g'ri javoblar soni: {data.totalQuestions}
        </h1>
        <br /><br />
        <h2 className='text-xl font-bold'> Umumiy balingiz : {data.userScore
        }</h2>


      </div>



    </>

  )
}

export default Javob