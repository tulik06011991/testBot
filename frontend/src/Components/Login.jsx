
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';


const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
<<<<<<< HEAD
  const [userData, setUserData] = useState(null)


 
=======
  const[Data, setData] = useState([])
>>>>>>> 5fd3b6ecc0e122c0e206ddd97db30d2dda272ee5
  
  const handleSubmitt = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:3000/auth/login',
        { email: email, password: password },
        {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        },
      );
<<<<<<< HEAD
      
      if (response.data.isAdmin) {
        navigate('/dashboard');
      } else {
        navigate('/menu');
        
      }
      setUserData(response.data)
=======
     
      setData(response.data._id);
      
      
      
      if (response.data.isAdmin) {
        console.log(Data)
        //  navigate('/menu');
       } else {
         navigate('/menu');
       }

     
>>>>>>> 5fd3b6ecc0e122c0e206ddd97db30d2dda272ee5
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <div>
      
      <div className="h-screen bg-indigo-100 flex justify-center items-center">
        <div className="lg:w-2/5 md:w-1/2 w-2/3">
          <form  onSubmit={handleSubmitt} className="bg-white p-10 rounded-lg shadow-lg min-w-full">
            <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Login</h1>
            
            <div>
              <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="email">Email</label>
              <input   onChange={(e) => setEmail(e.target.value)} className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="email" id="email" placeholder="@email" />
            </div>
            <div>
              <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="password">Password</label>
              <input   onChange={(e) => setPassword(e.target.value)} className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="password" id="password" placeholder="password" />
            </div>
            
            <button type="submit" className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans">Login</button>
            
          </form>
          {Data}
        </div>
      </div>
    </div>
  )
}

export default Login
