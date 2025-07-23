import axios from 'axios';
import React, { useRef, useState } from 'react'
import Footer from './Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from 'react-router-dom';
const Adminlogin = () => {
    const notify=(message)=>toast.success(message);
    const [redirect,setredirect]=useState(false);
    const emailref=useRef(null);
    const passwordref=useRef(null);
    const HandleLogin=()=>{
         const obj={
            email:emailref.current.value,
            password:passwordref.current.value
         }
         sendData(obj);
    }
    const sendData=async(obj)=>{
      try{
        if(obj.email=="admin@admin" && obj.password=="admin")
        {
            const notify=(message)=>toast.success(message);
            notify("Welcome Admin!");
            setTimeout(()=>setredirect(true),2000);
        }
      }
      catch(err)
      {
        const notify=(message)=>toast.error(message);
        notify("Invalid credentials!");
      }
    }
    if(redirect)
    {
        return <Navigate to={"/admin"}/>
    }
  return (
    <>
    <ToastContainer/>
    <div className='w-screen h-screen bg-black flex justify-center items-center'>
    <div className='animate-spin'>
    <div className=' w-[100px] h-[100px] bg-orange-500 rounded-full animate-bounce'> 
             
    </div>
    </div>
          <div className='w-[400px] h-[380px] bg-slate-500 rounded-3xl'>
            <p className='text-center font-bold text-3xl pt-6'>ADMIN LOGIN</p>
            <div className='w-full h-full flex flex-col justify-center items-center'>
                <input ref={emailref} type="" name="" id="" className='w-[80%] p-5 rounded-2xl border border-black m-5' placeholder='Secret ID'/>
                <input ref={passwordref}type="password" name="" id="" className='w-[80%] p-5 rounded-2xl border border-black m-5' placeholder='Password'/>
                <button className='bg-yellow-300 pl-5 pr-5 pt-4 pb-4 mb-4 rounded-2xl' onClick={HandleLogin}>LOGIN</button>
            </div>
          </div>
    <div className='animate-spin'>
    <div className=' w-[100px] h-[100px] bg-orange-500 rounded-full animate-bounce'>      
    </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Adminlogin