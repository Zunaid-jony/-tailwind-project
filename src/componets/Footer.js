import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-gradient-to-r from-indigo-800 via-purple-900 to-indigo-900 text-white py-10 px-6'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        
        {/* About IELTS Section */}
        <div>
          <h2 className='text-2xl font-bold mb-4'>About IELTS</h2>
          <p className='text-gray-300'>
            The International English Language Testing System (IELTS) is designed to help you work, study, or migrate to a country where English is the native language. A good IELTS score is a gateway to countless opportunities.
          </p>
        </div>
        
        {/* Quick Links Section */}
        <div>
          <h2 className='text-2xl font-bold mb-4'>Quick Links</h2>
          <ul>
            <li className='py-2 text-gray-300 hover:text-white'><a href="#home">Home</a></li>
            <li className='py-2 text-gray-300 hover:text-white'><a href="#about">About IELTS</a></li>
            <li className='py-2 text-gray-300 hover:text-white'><a href="#resources">Resources</a></li>
            <li className='py-2 text-gray-300 hover:text-white'><a href="#testimonials">Testimonials</a></li>
            <li className='py-2 text-gray-300 hover:text-white'><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        
        {/* Contact Section */}
        <div>
          <h2 className='text-2xl font-bold mb-4'>Contact Us</h2>
          <p className='text-gray-300 mb-2'>Email: info@ieltsacademy.com</p>
          <p className='text-gray-300 mb-2'>Phone: +1 (234) 567-890</p>
          <p className='text-gray-300'>Address: 123 IELTS Ave, Language City, Country</p>
          
          {/* Social Media Icons */}
          <div className='flex mt-4 space-x-4'>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='text-gray-300 hover:text-white'>
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='text-gray-300 hover:text-white'>
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='text-gray-300 hover:text-white'>
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='text-gray-300 hover:text-white'>
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='text-center pt-10 border-t border-gray-700 mt-10'>
        <p className='text-gray-400'>© 2024 IELTS Academy. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
