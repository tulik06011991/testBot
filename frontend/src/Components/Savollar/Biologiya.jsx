import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Biologiya = () => {

const [Data, setdata] = useState([])

useEffect(() =>{
  const fetchData = async () =>{
    try {

    const response = await  axios.get(`http://localhost:3000/test/answer/get`,
    {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    },)
   
    setdata(response.data)
    
  } catch (error) {
    console.log(error)
    
  }
  }
fetchData()
  
},[])
console.log(Data)
  return (
    <div>Biologiya</div>
  )
}

export default Biologiya
