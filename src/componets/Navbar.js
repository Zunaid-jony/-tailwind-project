import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [sticky, setSticky] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${sticky ? 'bg-gradient-to-r from-indigo-800 via-purple-900 to-indigo-900 h-16' : 'bg-transparent h-20'} text-white shadow-md`}>
      <div className='flex justify-between items-center max-w-[1240px] mx-auto px-4'>
        
        {/* Logo Section */}
        <div className='flex items-center'>
          <img 
            className='w-16' 
            src="https://i.ibb.co/BVw5ypm/vocabulary-removebg-preview.png" 
            alt="Logo"
          />
          <h1 className='ml-4 text-2xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-green-500 to-blue-600 hover:from-pink-500 hover:to-yellow-500'>
            VOCAB
          </h1>
        </div>
        
        {/* Desktop Links */}
        <ul className='hidden md:flex items-center'>
        
          <li className='p-4 border-b text-gray-600'><Link to="/resources" >Resources</Link></li>
          {/* onClick={handleNav} */}
          <li className='p-4 flex items-center'>
            <span className='font-bold mr-1'>Jony</span>
            <img 
              className='w-12 h-12 rounded-full bg-slate-400' 
              src="https://i.ibb.co/MMncnnR/user-pic.png" 
              alt="User"
            />
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>

        {/* Mobile Links */}
        <ul className={`fixed top-0 left-0 w-[60%] h-full from-indigo-800 via-purple-900 to-indigo-900 border-r border-r-gray-900 transition-transform duration-500 ${nav ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className='p-6 mt-8'>
            <h1 className='text-2xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-green-500 to-blue-600 hover:from-pink-500 hover:to-yellow-500'>
              VOCAB
            </h1>
          </div>
          {/* <li className='p-4 border-b border-gray-600'><Link to="/" onClick={handleNav}>Home</Link></li> */}
          <li className='p-4 border-b text-white font-bold border-gray-600'><Link to="/resources" onClick={handleNav}>Resources</Link></li>
          
          <li className='p-4'>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
