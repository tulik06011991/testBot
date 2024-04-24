import React from 'react'
import UserContext from '../userContext';

const Javob = () => {
  const { natija } = useContext(UserContext);
  console.log(natija)
  return (
    <><br /><br /><br /><br /><div className='text-2xl font-bold'>Tamomladingiz : natija
      <h3></h3>

    
      
     </div></>
  )
}

export default Javob