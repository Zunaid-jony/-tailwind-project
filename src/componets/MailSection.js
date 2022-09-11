import React from 'react';

const MailSection = () => {
    return (
        <div className='w-full py-16 text-white'>
            <div className='max-w-[1240] mx-auto grid lg:grid-cols-3'>
                
               
        
                <div className='lg:col-span-2 px-4'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 '>Lorem ipsum dolor sit amet consectetur.</h1>
                    <p>Lorem ipsum, dolor sit amet conse</p>
                </div>
                <div className='my-4 '>
                    <div className='px-4 my-4 flex flex-col sm:flex-row items-center justify-between w-full'>
                       <input className='p-3 rounded-md w-full ' type="email" placeholder='Enter Your Email'/>

                       <button className='text-white  w-100% bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-[200px] rounded-md mx-auto font-medium ml-4 my-6 py-3 px-3 text-center mx-0'>Send</button>
                    </div>
                    <p className='px-4'>
                    We care bout the protection of your data. Read our{' '}
                    <span className='text-[#00df9a] '>Privacy Policy.</span>
                 </p>
                </div>

            </div>
       
        </div>
    );
};

export default MailSection;