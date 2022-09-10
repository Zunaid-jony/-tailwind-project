import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handelNev = () =>{
        setNav(!nav)
    }
    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
          <h1 className='w-full text-3xl font-bold text-[#00df9a]'>  Navbar page</h1>
          <ul className=' flex hidden '>
            <li className='p-4 '>Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'> Resources</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>

          </ul>
          <div onClick={handelNev}>
            {!nav ? <AiOutlineClose size={20}/> : <HiMenu size={20}></HiMenu>}
          
          </div>
          <div className='fixed left-0 top-0  h-full w-[60%] border-r border-r-gray-900 bg-gray-600'>
          <h1 className='w-full text-3xl font-bold text-[#00df9a] m-5'>  Navbar page</h1>
          <ul className=' uppercase p-4'>
            <li className='p-4 border-b border-gray-500'>Home</li>
            <li className='p-4 border-b border-gray-500'>Company</li>
            <li className='p-4 border-b border-gray-500'> Resources</li>
            <li className='p-4 border-b border-gray-500'>About</li>
            <li className='p-4 border-b border-gray-500'>Contact</li>

          </ul>

          </div>
        </div>
    );
};

export default Navbar;