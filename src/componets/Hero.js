import React from 'react';import Typed from 'react-typed';
const Hero = () => {
    return (
        <div className='text-white '>
           <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
           <p className='text-[#00df93] font-bold p-2 uppercase '>hero section</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-3'>hero section</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-2'>Fast, Flexible financing for</p>
                {/* Typed ata live typing show kore dekah jai  */}
                <Typed
                className='md:text-5xl sm:text-4xl   text-xl font-bold pl-2'
                 strings={['BOSS', 'BTC', 'SASS']}
                 typeSpeed={120}
                    backSpeed={140}
                    loop 
                
                ></Typed>
            </div>
            <p className='mt-3 md:text-2xl text-xl font-bold text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, at?</p>
            <button className=' w-100% bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-[200px] rounded-md mx-auto font-medium my-6 py-3'>Get Stated</button>
           </div>
        </div>
    );
};

export default Hero;