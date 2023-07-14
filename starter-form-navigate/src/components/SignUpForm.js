import React, { useState } from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import {toast} from "react-hot-toast"
import { useNavigate } from 'react-router-dom'

export default function SignUpForm({setIsLoggedIn}) {
    const navigate = useNavigate()
    const [formData,setFormData]=useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        confirmPassword:""
    })


    const [showCreatePassword,setShowCreatePassword]=useState(false)
    const [showConfirmPassword,setShowConfirmPassword] = useState(false)
     
    function changeHandler(event){
        setFormData((prevData)=>({
            ...prevData,
            [event.target.name]:event.target.value
        }))
    }
    function submitHandler(event){
        event.preventDefault();
        if(formData.password !== formData.confirmPassword){
            toast.error("Password do not match")
            return
        }   
        setIsLoggedIn(true)
        toast.success("Account Created ")
        navigate("/dashboard")
        
    }

    const [accountType,setAccountType] = useState("student")


  return (
    <div>

        <div className='flex bg-gray-900 p-1 gap-x-1 rounded-full max-w-max mt-2'>
            
            <button className={`${accountType ==="student"?
             "bg-gray-700 text-gray-100":
             "text-gray-200"} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={()=>setAccountType("student")}>Student</button>

            <button  className={`${accountType ==="instructor"?
             "bg-gray-700 text-gray-100":
             " text-gray-200"} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={()=>setAccountType("instructor")}>Instructor</button>
        </div>

        <form onSubmit={submitHandler}>
            {/* first name and last name */}
            <div className='flex  mt-[29px] justify-between'>
                <label>
                    <p className='text-[0.875rem] text-gray-100 mb-1 
                    leading-[1.375rem]'>First Name <sup className='text-red-500'>*</sup></p>
                    <input 
                    required 
                    type="text" 
                    name="firstname" 
                    onChange={changeHandler}
                    placeholder="Enter First Name"
                    value={formData.firstname}
                    className="rounded-md px-4 py-2 w-full bg-slate-600 text-gray-50
                border-b"
                    />
                </label>
                <label>
                    <p className='text-[0.875rem] text-gray-100 mb-1 
                    leading-[1.375rem]'>Last Name <sup className='text-red-500'>*</sup></p>
                    <input 
                    required 
                    type="text" 
                    name="lastname" 
                    onChange={changeHandler}
                    placeholder="Enter Last Name"
                    value={formData.lastname}
                    className="rounded-md px-4 py-2 w-full bg-slate-600 text-gray-50
                border-b"
                    />
                </label>
            </div>

            <label className='w-full'>
                    <p className='text-[0.875rem] text-gray-100 mb-1 mt-3 
                    leading-[1.375rem]'>Email<sup className='text-red-500'>*</sup></p>
                    <input 
                    required 
                    type="text" 
                    name="email"
                    onChange={changeHandler}
                    placeholder="Enter your email address"
                    value={formData.email}
                    className="rounded-md px-4 py-2 w-full bg-slate-600 
                    text-gray-50 border-b"
                    />
            </label>

            {/* password and conf password */}
            <div className='w-full justify-between flex space-x-3 mt-3'>
                <label className='relative w-full'>
                        <p className='text-[0.875rem] text-gray-100 mb-1 
                        leading-[1.375rem]'>Create Password<sup className='text-red-500'>*</sup></p>
                        <input 
                            required 
                            type={showCreatePassword?("text"):("password")} 
                            name="password" 
                            onChange={changeHandler}
                            placeholder="Enter Password"
                            value={formData.password}
                            className="rounded-md px-4 py-2 w-full bg-slate-600 
                            text-gray-50 border-b"
                        />

                    <span className='absolute right-3 top-[2.17rem] cursor-pointer'
                    onClick={()=> setShowCreatePassword((prev)=>!prev)}>
                        { 
                            showCreatePassword ?
                                (<AiOutlineEyeInvisible fontSize={24} fill="white"/>):
                                (<AiOutlineEye fontSize={24} fill="white"/>)
                        }
                    </span>
                </label>
                <label className='relative w-full'>
                        <p className='text-[0.875rem] text-gray-100 mb-1 
                        leading-[1.375rem]'>Confirm Password<sup  className='text-red-500'>*</sup></p>
                        <input 
                            required 
                            type={showConfirmPassword?("text"):("password")} 
                            name="confirmPassword"
                            onChange={changeHandler}
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            className="rounded-md px-4 py-2 w-full bg-slate-600 text-gray-50
                border-b"
                        />

                    <span className='absolute right-3 top-[2.18rem] cursor-pointer'
                    onClick={()=> setShowConfirmPassword((prev)=>!prev)}>
                        {showConfirmPassword?(<AiOutlineEyeInvisible fontSize={24} fill="white"/>):
                        (<AiOutlineEye fontSize={24} fill="white"/>)}
                    </span>
                </label>
            </div>

            <button  className='w-full bg-yellow-400 rounded-[8px] font-medium
                text-gray-700 px-[12px] py-[8px] mt-6'>
                Create Account
            </button>
        </form>

    </div>
  )
}
