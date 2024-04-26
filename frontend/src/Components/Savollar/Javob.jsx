import React, { useContext, useState } from 'react';
import UserContext from '../userContext';


const Javob = () => {
  const { natija } = useContext(UserContext);
  
  const [data] = useState(natija);
  console.log(data)
  return (
    <>
    <div>
    <br /><br /><br /><br />
    <h1 className='text-xl font-bold'>
      Javoblar soni: {data.totalQuestions}
    </h1>


    </div>

    
    
    </>
   
  )
}

export default Javob