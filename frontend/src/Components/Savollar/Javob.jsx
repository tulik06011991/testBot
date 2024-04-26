import React, { useContext, useState } from 'react';
import UserContext from '../userContext';

// Alloh o'zinga ming qadar shukr!   oxiri uddaladim
const Javob = () => {
  const { natija } = useContext(UserContext);

  const [data] = useState(natija);
  console.log(data)
  return (
    <>
      <div>
        <br /><br /><br /><br />
        <h2 className='text-xl font-bold'> Savollarning umumiy soni:  {data.totalQuestions}</h2>
        <h1 className='text-xl font-bold'>

          To'g'ri javoblar soni: {data.totalQuestions}
        </h1>
        <h2 className='text-xl font-bold'> Umumiy balingiz : {data.userScore
        }</h2>


      </div>



    </>

  )
}

export default Javob