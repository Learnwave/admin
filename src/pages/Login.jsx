import React, { useContext, useState } from 'react'
// import {assets} from '../assets/assets_admin/assets'
import { AdminContext } from '../context/AdminContext'

import axios from 'axios'
import { data } from 'react-router-dom';
import { toast } from 'react-toastify';
const Login = () => {

    const [state,setState] = useState('Admin')

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const {setAtoken,backendUrl} = useContext(AdminContext)
    
    const onSubmitHandler = async (event)=> {
          event.preventDefault();
          try {
            if (state === "Admin") {
              const {data} = await axios.post(backendUrl + '/api/admin/login',{email,password})
              if (data.success) {
                localStorage.setItem('aToken',data.token)
                setAtoken(data.token)
              }else{
                toast.error(data.message)
              }
                
            }else{
              console.log(data.message);
            }
          } catch (error) {
            console.log(error);
            
          }
    }

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-md text-gray-500 text-sm shadow-lg'>
        <p className='text-2xl font-semibold m-auto'><span className='text-primary'>Admin</span>Login</p>
        <div className='w-full '>
          <p>Email</p>
          <input onChange={(e)=>setEmail(e.target.value)} value={email} className='border border-[#dadada] rounded w-full p-2 mt-1' type="text" required name="" id="email" />
        </div>
        <div className='w-full'>
          <p>Password</p>
          <input onChange={(e)=>setPassword(e.target.value)} value={password}  className='border border-[#dadada] rounded w-full p-2 mt-1' type="password" required name="" id="password" />
        </div>
        <button className='bg-black  text-white w-full py-2 rounded-md text-base mt-4 mb-4 '>Login</button>
       
      </div>
    </form>
  )
}

export default Login