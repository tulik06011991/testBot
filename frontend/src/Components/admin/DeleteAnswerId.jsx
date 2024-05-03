
import React, { useState } from 'react';
import axios from 'axios';

const DeleteAnswerId = ({ userId }) => {
  const [deleted, setDeleted] = useState(false);

  const deleteUserAnswer = async () => {
    try {
      await axios.delete(`http://localhost:3000/test/deleteJavoblarId/${userId}`);
      setDeleted(true);
    } catch (error) {
      console.error('Error deleting user answer:', error);
    }
  };

  if (deleted) {
    return <p className='font-bold'>Muvaffaqiyatli o'chirildi.</p>;
  }

  return (
    <button onClick={deleteUserAnswer} className="px-4 py-2 bg-blue-400 cursor-pointer rounded font-bold text-white">
      Delete Answer
    </button>
  );
};

export default DeleteAnswerId;

































// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router-dom';

// const DeleteAnswerId = () => {
//   const navigate= useNavigate()
//   const { id } = useParams();
//   console.log(id); // Ekranga `6621e9deb47fbf9082cee08c` qiymatini chiqaradi

//   const [deleted, setDeleted] = useState(false);

//  useEffect(() =>{
//   const deleteUserAnswer = async () => {
//     try {
//       await axios.delete(`http://localhost:3000/test/deleteJavoblarId/${id}`);
//       setDeleted(true);
//     } catch (error) {
//       console.error('Error deleting user answer:', error);
//     }
//   };
//   deleteUserAnswer()

//  },[])
  

//    if(deleted){
//     return <p>User answer deleted successfully.</p>;
    

//    }
//  // id o'zgaruvchisidagi o'zgarishlar uchun useEffectni qayta ishga tushirish

 

//   return (
//     <>
    
//     </>
//   );
// };

// export default DeleteAnswerId;
