import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const DeleteUser = () => {
    const {id} = useParams()
    const [data, setData] = useState('')
    
    console.log(id)
    const handleDelete = async () =>{
        const token = localStorage.getItem('token');
        try {
            const response = await axios.delete(`http://localhost:3000/foydalanuvchi/user/${id}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'access_token': token
                },
                withCredentials: true
            }

        )
        } catch (error) {
            console.log(error)
            
        }
    }


  return (
    <div> <br /><br /><br /><br />
    <form onSubmit={handleDelete}>


    </form>
    </div>
  )
}

export default DeleteUser
