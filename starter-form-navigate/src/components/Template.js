import React from 'react'
import frameImage from "../assets/frame.png";
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import {FcGoogle} from "react-icons/fc"

export default function Template({title,desc1,desc2,image,formtype,setIsLoggedIn}) {
  return (
    <div className='max-w-[1160px] w-11/12 flex py-12 mx-auto gap-x-12 justify-between gap-y-0'>

        <div className='w-11/12 max-w-[450px]'>
            <h1 className='text-gray-300 font-semibold text-[1.875rem]
             leading-[2.375rem]'>{title}</h1>
            <p  className='text-[1.125rem] leading-[1.625rem] mt-4'>
            <span className='text-gray-300'>{desc1}</span>
            <br />
            <span className='italic text-blue-200'>{desc2}</span>
            </p>

            {formtype==="signup"?
            (<SignUpForm setIsLoggedIn={setIsLoggedIn}/>):
            (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

            <div className='flex flex-row w-full items-center gap-x-2 my-4'>
                <div className='h-[1px] w-full bg-slate-400'></div>
                <p className='text-white font-medium leading-[1.375rem]'>or</p>
                <div className='h-[1px] bg-slate-400 w-full'></div>
            </div> 

            <button className='w-full flex justify-center items-center rounded-[8px]
            font-medium text-white border-[1.5px] border-white px-[12px] py-[8px] gap-x-2 
            mt-6'>{/* FcGoogle */}
                <FcGoogle/>
                <p>Sign up with Google</p>
            </button>

        </div>

        <div className='relative w-11/12 max-w-[450px] '>
            <img src={frameImage} alt="patter"
            width={558} height={504} loading="lazy" />

            <img src={image } alt="patter"
            width={558} height={590} loading="lazy" 
                className='absolute -top-4 right-4'
            />
        </div>

    </div>
  )
}
