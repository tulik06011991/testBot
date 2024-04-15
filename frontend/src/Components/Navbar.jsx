import React, { useState } from 'react';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

 

 

  return (
    


  
    <div className='bg-gray-500'>
      <nav className='fixed top-0 left-0 bg-gray-200 w-full shadow'>
        <div className='container m-auto flex justify-between items-center text-gray-700'>
          <h1 className='pl-8 py-4 text-xl font-bold'>salom Tolqin</h1>
          <ul className='hidden md:flex items-center pr-10 text-base font-semibold cursor-pointer'>
            <li className='hover:bg-gray-400 rounded py-3 px-6 my-2 mr-3'>Home</li>
            <li className='hover:bg-gray-400 rounded py-3 px-6 my-2'>Contact</li>
            <li className='hover:bg-gray-400 rounded py-3 px-6 my-2'>Servise</li>
            <li className='hover:bg-gray-400 rounded py-3 px-6 my-2'>About</li>
          </ul>
          <button onClick={() => setNavbarOpen(!navbarOpen)} className='block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-blue-300 group'>
            <div className='w-5 h-1 bg-gray-700 mb-1'></div>
            <div className='w-5 h-1 bg-gray-700 mb-1'></div>
            <div className='w-5 h-1 bg-gray-700 mb-1'></div>
            <div className= {`${navbarOpen ? 'absolute -right-0 top-0 h-screen w-6/12 bg-gray-200 ' : 'hidden'}  `}>
              <ul className='flex flex-col items-center  w-full text-base cursor-pointer pt-12'>
                <div>

              <i class="fa-sharp fa-solid fa-circle-xmark fa-2xl -left-0 absolute  text-gray-800"><button className='hover:bg-blue-400 rounded w-full'></button></i>
                </div>
                <br /><br /><br /><br />
                <li className='hover:bg-gray-300 mt-12 hover:bg-gray-400 rounded py-4 px-6 font-bold hover:text-white tracking-widest w-full'>Home</li>
                <li className='hover:bg-gray-300 py-4 hover:bg-gray-400 rounded px-6  font-bold hover:text-white tracking-widest w-full'>Contact</li>
                <li className='hover:bg-gray-300 py-4 hover:bg-gray-400 rounded px-6  font-bold hover:text-white tracking-widest w-full'>Servise</li>
                <li className='hover:bg-gray-300 py-4 hover:bg-gray-400 rounded px-6  font-bold hover:text-white tracking-widest w-full'>About</li>
              </ul>
            </div>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
