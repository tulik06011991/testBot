import React, { useState } from 'react';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

 

 

  return (
    


  
    <div className='bg-gray-500'>
      <nav className='fixed top-0 left-0 bg-gray-200 w-full shadow'>
        <div className='container m-auto flex justify-between items-center text-gray-700'>
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
            <div className= {`${navbarOpen ? 'absolute -left-0 top-0 h-screen w-5/12 bg-gray-200 ' : 'hidden'}  `}>
              <ul className='flex flex-col items-center  w-full text-base cursor-pointer pt-12'>
                <div>

              <i class="fa-sharp fa-solid fa-circle-xmark fa-2xl -right-0 absolute  text-gray-800"><button className='hover:bg-blue-400 rounded w-full'></button></i>
                </div>
                <br /><br /><br /><br />
                <li className='hover:bg-gray-300 mt-12 hover:bg-gray-400 rounded py-4 px-6 font-bold hover:text-white tracking-widest w-full'>Home<i class="fa-sharp fa-solid fa-house absolute left-12 py-1 items-center"></i></li>
                <li className='hover:bg-gray-300 py-4 hover:bg-gray-400 rounded px-6  font-bold hover:text-white tracking-widest w-full'>Contact<i class="fa-solid fa-phone-volume absolute left-12 py-1 items-center"></i></li>
                <li className='hover:bg-gray-300 py-4 hover:bg-gray-400 rounded px-6  font-bold hover:text-white tracking-widest w-full'>Servise<i class="fa-solid fa-taxi absolute left-12 py-1 items-center"></i></li>
                <li className='hover:bg-gray-300 py-4 hover:bg-gray-400 rounded px-6  font-bold hover:text-white tracking-widest w-full'>About<i class="fa-solid fa-address-card absolute left-12 py-1 items-center"></i></li>
              </ul>
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              <div className='hover:bg-gray-300 py-4 hover:bg-gray-400 rounded px-6  font-bold hover:text-white tracking-widest w-full'>

              <button className='relative mx-6'>Sign-out<i class="fa-sharp fa-solid fa-right-from-bracket ml-3"></i></button>
              </div>
            </div>
            
          </button>
          <h1 className='pr-8 py-4 text-xl font-bold'>salom Tolqin</h1>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
