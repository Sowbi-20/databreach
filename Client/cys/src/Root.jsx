import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer'
const Root = () => {
  return (
    <div className="w-screen h-screen bg-cover bg-center" id="bg1">
<marquee width="60%" direction="left" height="100px" className="w-screen">
<p className='text-2xl font-bold text-white'>Data Breach Monitoring System involves developing a system to detect, analyze, and respond to data breaches, helping organizations safeguard sensitive data by continuously monitoring for potential threats and alerting users when a breach occurs</p>
</marquee>
      <div className="w-full h-full flex flex-col justify-center items-center space-y-8">
      <div className='w-[80%] h-auto flex justify-center items-center flex-col backdrop-blur-lg p-3 space-y-8'>
        <p className="text-3xl font-mono text-orange-500 p-5 animate-pulse">DATA BREACH MONITORING SYSTEM</p>

        <Link to="/login">
          <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300">
            LOGIN
          </button>
        </Link>
        <Link to="/adminlogin">
          <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300">
            Admin Login
          </button>
        </Link>
        </div>  
      </div>
     < Footer/>
    </div>
  );
};

export default Root;
