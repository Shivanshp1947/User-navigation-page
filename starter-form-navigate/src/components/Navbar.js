import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from "../assets/Logo.svg"
import {toast} from "react-hot-toast"

export default function Navbar(props) {
    let isLoggedIn = props.isLoggedIn
    let setIsLoggedIn = props.setIsLoggedIn

  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>

    <Link to="/">
        <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
    </Link>  

    <nav>
        <ul className='flex gap-6 text-white '>
            <li className=' opacity-80 hover:opacity-100 transition-all duration-300'>
                <NavLink to="/">Home</NavLink>
            </li>
            <li className=' opacity-80 hover:opacity-100 transition-all duration-300'>
                <NavLink to="/about">About</NavLink>
            </li>
            <li className=' opacity-80 hover:opacity-100 transition-all duration-300'>
                <NavLink to="/contact">Contact</NavLink>
            </li>
        </ul>
    </nav>

    <div className='flex items-center gap-x-4'>
        { !isLoggedIn &&
            <Link to="/login">
                <button className='bg-slate-800 text-gray-100 py-[8px] px-[14px]
                rounded-[8px] border border-gray-500
                hover:bg-slate-900 hover:text-white transition-all duration-200 '>
                    Log in
                </button>
            </Link>
        }
        {!isLoggedIn &&
            <Link to="/signup">
                <button  className='bg-slate-800 text-white py-[8px] px-[12px]
                rounded-[8px] border border-gray-500
                hover:bg-slate-900 hover:text-white transition-all duration-200 '>
                    Sign up
                </button>
            </Link>
        }
        {isLoggedIn &&
            <Link to="/">
                <button  className='bg-slate-800 text-white py-[8px] px-[14px]
                rounded-[8px] border border-gray-500
                hover:bg-slate-900 hover:text-white transition-all duration-200 '
                 onClick={()=>{
                    setIsLoggedIn(false);
                    toast.success("Logged Out")
                }}>
                    Log Out
                </button>
            </Link>
        }
        {isLoggedIn &&
            <Link to="/dashboard">
                <button  className='bg-slate-800 text-white py-[8px] px-[12px]
                rounded-[8px] border border-gray-500
                hover:bg-slate-900 hover:text-white transition-all duration-200 '>
                    Dashboard
                </button>
            </Link>
        }
    </div>

    </div>
  )
}
