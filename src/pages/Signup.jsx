import React, { useState } from 'react'
import { Link ,useNavigate } from 'react-router-dom'
import { UserAuth } from "../context/AuthContext"


export const Signup = () => {

const[email ,setemail]=useState("")
const[password ,setpassword]=useState("")
const {user ,signup } = UserAuth()
const navigate =useNavigate()


const handlesubmit = async (e) =>{
    e.preventDefault()
    try {
        await signup(email ,password)
        setemail("")
        setpassword("")
        navigate("/")
    } catch (error) {
        console.log(error)
    }
     
}

  return (
    <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full object-cover'   src="https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/76f72366-b846-4ea2-93c3-5c08d70e2705/DE-en-20230918-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="/" />
        <div className=' bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
            <div className='max-w-[450px] h-[500px] bg-black/75 text-white mx-auto rounded'>
                <div className='max-w-[320px] mx-auto py-16'>
                    <h1 className='text-3xl font-bold '>Sign Up</h1>
                    <form
                    onSubmit={handlesubmit}
                    className='w-full flex flex-col py-4'>
                        <input onChange={(e)=>setemail(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type='email' placeholder='email'/>
                        <input onChange={(e)=>setpassword(e.target.value)} className='p-3 my-2 bg-gray-700 rounded'  type='password' placeholder='password' autoComplete='current-password'/>
                        <button className='bg-red-600 py-3 my-5 rounded font-bold'>Sign Up</button>
                        <div className='flex justify-between items-center text-sm text-gray-600'>
                            <p> <input className='mr-2' type="checkbox" /> Remember me</p>
                            <p>Need Help?</p>
                        </div>
                        <p className='py-8'><span className='text-gray-600'>Already subscribe to netflix?</span> <Link to="/login">Sign In</Link>  </p> 
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
