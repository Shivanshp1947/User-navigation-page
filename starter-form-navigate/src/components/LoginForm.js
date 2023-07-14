import React, { useState } from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import { Link, useNavigate   } from 'react-router-dom'
import {toast} from "react-hot-toast" 

export default function LoginForm({setIsLoggedIn}) {
    const navigate = useNavigate()
    const [formData,setFormData]=useState({
        email:"",password:""
    })

    const [showPassword,setShowPassword] = useState(false)

    function changehandler(event){
        setFormData((prevdata)=>({
            ...prevdata,
            [event.target.name]:event.target.value
        }))
    }

    function submithandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged in")
        navigate("/dashboard")
    }
  return (
    <form onSubmit={submithandler} 
    className="flex flex-col w-full gap-y-4 mt-6">

        <label className='w-full'>
            <p className='text-[0.875rem] text-gray-100 mb-1 leading-[1.375rem]'>
                Email Address <sup className='text-red-400'>*</sup>
            </p>
            <input required 
                type="email" 
                value={formData.email}
                onChange={changehandler}
                name="email"
                placeholder='Enter the email'
                className="rounded-md px-4 py-2 w-full bg-slate-600 text-gray-50
                border-b"
                />
        </label>
        <label className='relative w-full'>
            <p className='text-[0.875rem] text-gray-100 mb-1 leading-[1.375rem]'>Password <sup  className='text-red-400'>*</sup></p>
            <input required 
                type={showPassword?("text"):("password")} 
                value={formData.password}
                onChange={changehandler}
                name="password"
                placeholder='Enter the password'
                className="rounded-[0.5rem] p-[12px] px-4 py-2 w-full  bg-slate-600 text-gray-50
                border-b"
                />
        

            <span className='absolute cursor-pointer right-3 top-[35px]'
             onClick={()=> setShowPassword((prev)=>!prev)}>
                {showPassword ?
                (<AiOutlineEyeInvisible 
                fontSize={24} fill="white" />):
                (<AiOutlineEye  fontSize={24} fill="white"/>)}
            </span>

            <Link to="#">
                <p className='text-blue-300 mt-2 text-xs max-w-max  ml-auto '>
                    Forgot Password
                </p>
            </Link>
        </label>

        <button className='bg-yellow-400 rounded-[8px] font-medium
         text-gray-700 px-[12px] py-[8px] mt-6'>
            Sign in
        </button>
    </form>
  )
}
