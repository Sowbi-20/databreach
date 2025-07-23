import axios from 'axios';
import React, { useRef,useState } from 'react'
import Footer from './Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from 'react-router-dom';
const Login = () => {
  const [redirect,setredirect]=useState(false);
    const notify=(message)=>toast.success(message);
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
        const res=await axios.post("https://cys.onrender.com/api/v1/login",{email:obj.email,password:obj.password});
        const notify=(message)=>toast.success(message);
        notify(res.data.message);
        setredirect(true);
      }
      catch(err)
      {
        const notify=(message)=>toast.error(message);
        notify("Invalid credentials!");
      }
    }
     if(redirect)
        {
            return <Navigate to={"/dashboard"}/>
        }
  return (
    <>
    <ToastContainer/>
    <div className='w-screen h-screen bg-black flex justify-center items-center'>
          <div className='w-[400px] h-[380px] bg-blue-600 rounded-3xl'>
            <p className='text-center font-bold text-3xl pt-6'>LOGIN</p>
            <div className='w-full h-full flex flex-col justify-center items-center'>
                <input ref={emailref} type="" name="" id="" className='w-[80%] p-5 rounded-2xl border border-black m-5' placeholder='EMAIL'/>
                <input ref={passwordref}type="text" name="" id="" className='w-[80%] p-5 rounded-2xl border border-black m-5' placeholder='PASSWORD'/>
                <button className='bg-yellow-300 pl-5 pr-5 pt-4 pb-4 mb-4 rounded-2xl' onClick={HandleLogin}>LOGIN</button>
            </div>
          </div>
    </div>
    <Footer/>
    </>
  )
}

export default Login