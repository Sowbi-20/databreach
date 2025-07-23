import axios from 'axios';
import React, { useState } from 'react'
import { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Adduser = () => {
    const notify=(message)=>toast.success(message);
    const [getdata,setdata]=useState(false);
    const [getuserdata,setuserdata]=useState(false);
    const emailref=useRef(null);
    const passwordref=useRef(null);
    const Handleadduser=()=>{
         const obj={
            email:emailref.current.value,
            password:passwordref.current.value
         }
         setuserdata(obj);
         sendData(obj);
         setdata(true);
    }
    const sendData=async(obj)=>{
      try{
        const res=await axios.post("https://cys.onrender.com/api/v1/adduser",{email:obj.email,password:obj.password});
        notify(res.data.message);
        emailref.current.value="";
        passwordref.current.value="";
      }
      catch(err)
      {
        const notifyError=(message)=>toast.error(message);
        notifyError("User already exists!");
      }
    }
  return (
    <>
    <ToastContainer/>
       <div className='w-screen h-screen bg-slate-200 flex justify-center items-center'>
            <div className='flex flex-col w-[400px] h-[400px] space-y-5 '>
                <p className='text-2xl'>ADD USER</p>
                 <input ref={emailref} type="text" className='border border-black p-3 rounded-xl' placeholder='Email'/>
                 <input ref={passwordref} type="text" className='border border-black p-3 rounded-xl' placeholder='Password'/>
                 <button className='bg-black text-white p-2' onClick={Handleadduser}>ADD USER</button>
                 <div className=''>
            {
              getdata&&(
                <div className='w-[400px] h-[200px] justify-center flex flex-col'>
                   <p className='text-2xl text-green-400'>created user!</p>
                    <table className='border border-black'>
                        <thead className='border border-black'>
                        <tr className=''>
                            <th className='border border-black p-3'>EMAIL</th>
                            <th className='border border-black p-3'>PASSWORD</th>
                        </tr>
                        </thead>
                        <tbody className='border border-black'> 
                        <tr>
                            <td className='border border-black p-3'>{getuserdata.email}</td>
                            <td className='border border-black p-3'>{getuserdata.password}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
              )
            }
            </div>
            </div>
            </div>
    </>
  )
}

export default Adduser