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
    <div className='ml-8'>
      <br /><br /><br /><br />{Data.map((d , index) =>(
      <div key={index}><br /><br />

      <h1>{d.title} </h1>
      
      <h2> {d.options.map((variant, index) =>(
        <div>
          
          <input
                type="radio"
                id={variant}
                name="answer"
                value={variant}
            
              />
                <label >{variant}</label>
         


        </div>
      ))} </h2>
      </div>
    ))}</div>
  )
}

export default Biologiya
