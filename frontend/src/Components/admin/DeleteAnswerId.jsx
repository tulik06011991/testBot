  import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DeleteAnswerId  = () => {
  const id = useParams()
  console.log(id)
  const [deleted, setDeleted] = useState(false);

  useEffect(() =>{
    const deleteUserAnswer = async () => {
      try {
        await axios.delete(`http://localhost:3000/test/deleteJavoblarId/${id}`);
        setDeleted(true);
      } catch (error) {
        console.error('Error deleting user answer:', error);
      }
    };
  

    
    deleteUserAnswer()
  },[])


  return (
   <>
   </>
  );
};




export default DeleteAnswerId
