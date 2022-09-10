import React from 'react';
import { HiMenu } from 'react-icons/hi';

const Navbar = () => {
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
          <div>
          <HiMenu size={20}></HiMenu>
          </div>
          <div className='fixed left-0 top-0  h-full w-[60%] border-r border-r-gray-900 bg-gray-600'>
          <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>  Navbar page</h1>
          <ul className=' uppercase p-4'>
            <li className='p-4 border-b'>Home</li>
            <li className='p-4 border-b'>Company</li>
            <li className='p-4 border-b'> Resources</li>
            <li className='p-4 border-b'>About</li>
            <li className='p-4 border-b'>Contact</li>

          </ul>

          </div>
        </div>
    );
};

export default Navbar;