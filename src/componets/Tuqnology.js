import React from 'react';
import IMG from '../asses/hero.jpg'

const Tuqnology = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
           <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
           <img className='w-[500px] mx-auto my-4 animate-pulse transform hover:scale-125' src={IMG} alt="" />

           <div className='flex flex-col justify-center'>
            <p className='uppercase text-[#00df93] font-bold'>IELTS (International English Language Testing System).</p>
            <h3 className='md:text-2xl sm:text-3xl text-2xl font-bold py-2 uppercase'>
            IELTS is a test that measures English proficiency for university, It tests Listening, Reading, Writing, and Speaking skills.</h3>
            <p>IELTS has two types: Academic, for higher education, and General Training, for migration or work.</p>
            <button className='text-white  w-100% bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-[200px] rounded-md mx-auto font-medium my-6 py-3 text-center md:mx-0'>Get Stated</button>
           </div>

           </div>
        </div>
    );
};

export default Tuqnology;