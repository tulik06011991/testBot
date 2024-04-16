import React, { useState } from 'react';

const RadioButtons = () => {
  // State to keep track of selected radio button
  const [selectedOption, setSelectedOption] = useState('');

  // Function to handle radio button selection
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className=''>
      <form action="/" method="post">
      <br /><br /><br /><br />
    <div className="flex flex-col items-start py-12 ">
      {/* Radio Button 1 */}
      <label className="radio-container  w-full hover:bg-blue-200  py-8 shadow">
       
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
      <label className="radio-container w-full hover:bg-blue-200 py-8 shadow tracking-tight text-xl">
   
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
      <label className="radio-container w-full hover:bg-blue-200 py-8 shadow">
        
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
      <label className="radio-container w-full hover:bg-blue-200 py-8 shadow">
        <input
          type="radio"
          value="option4"
          checked={selectedOption === "option4"}
          onChange={handleOptionChange}
          />
        <span className="checkmark ml-8"></span>
          Option 4
      </label>
    </div>
    <div className='flex justify-end'>


    <button type="submit" className='px-8 py-4 mr-8 bg-gray-500'>saqlash</button>
    </div>
    </form>
    </div>
  );
};

export default RadioButtons;
