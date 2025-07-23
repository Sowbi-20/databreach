import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';

const Admin = () => {
  const notify = (message) => toast.error(message);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://cys.onrender.com/api/v1/getInvalid");
        const fetchedUsers = res.data.data;
        const notifyCount = Math.min(fetchedUsers.length, 3);
        for (let i = 0; i < notifyCount; i++) {
          notify(`Invalid attempt found: ${fetchedUsers[fetchedUsers.length - 1 - i].email}`);
        }
      } catch (err) {
        toast.error("Failed to fetch invalid login attempts");
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="w-screen h-screen bg-cover bg-center" id="bg1">
          <marquee behavior="" direction="">
            <p className='text-white font-semibold'>Data Breach Monitoring System involves developing a system to detect, analyze, and respond to data breaches, helping organizations safeguard sensitive data by continuously monitoring for potential threats and alerting users when a breach occurs.</p>
          </marquee>
  
        <div className="w-full h-full flex flex-col justify-center items-center space-y-8">
          <div className="w-[80%] h-auto flex justify-center items-center flex-col backdrop-blur-lg p-3 space-y-8">
            <p className="text-3xl font-mono text-orange-500 p-5 animate-pulse">WELCOME ADMIN</p>
            <Link to="/unknowlist">
              <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300">
                View Unknown Login Attempts
              </button>
            </Link>
            <Link to="/adduser">
              <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300">
                Add Users
              </button>
            </Link>
            <Link to="/allusers">
              <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300">
                View All Users
              </button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Admin;
