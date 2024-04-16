import React, { useState } from 'react';

const RadioButtons = () => {
  // State to keep track of selected radio button
  const [selectedOption, setSelectedOption] = useState('');

  // Function to handle radio button selection
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div >
      
      <form action="/" method="post">
      <br /><br /><br /><br />
      <div className='text-gray-900 flex justify-center font-bold'>
        <h1 className='text-gray text-xl '>Savollar ro'yxati</h1>
      </div>
    <div className="flex flex-col items-start py-12 ">
      {/* Radio Button 1 */}
      <label className="radio-container pl-8 text-xl tracking-tight w-full hover:bg-blue-200  py-8 shadow">
       
        <input
          type="radio"
          value="option1"
          checked={selectedOption === "option1"}
          onChange={handleOptionChange}
        />
        <span className="checkmark ml-8"></span>
        Option 1
      </label>

      {/* Radio Button 2 */}
      <label className="radio-container text-xl pl-8 tracking-tight  w-full hover:bg-blue-200 py-8 shadow ">
   
        <input 
          type="radio"
          value="option2"
          checked={selectedOption === "option2"}
          onChange={handleOptionChange} 
        />
        <span className="checkmark ml-8"></span>
        Option 2
      </label>

      {/* Radio Button 3 */}
      <label className="radio-container  text-xl pl-8 w-full tracking-tight hover:bg-blue-200 py-8 shadow">
        
        <input
          type="radio"
          value="option3"
          checked={selectedOption === "option3"}
          onChange={handleOptionChange}
        />
        <span className="checkmark ml-8"></span>
        Option 3
      </label>

      {/* Radio Button 4 */}
      <label className="radio-container pl-8 w-full text-xl tracking-tight hover:bg-blue-200 py-8 shadow">
        <input className='text-xl'
          type="radio"
          value="option4"
          checked={selectedOption === "option4"}
          onChange={handleOptionChange}
          />
        <span className="checkmark ml-8"></span>
          Option 4
      </label>
    </div>
    <div className='flex justify-center'>


    <button type="submit" className='px-8 py-2 mr-8 rounded bg-gray-500 text-xl font-bold text-blue-900'>Keyingisi</button>
    </div>
    </form>
    </div>
  );
};

export default RadioButtons;
