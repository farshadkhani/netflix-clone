import React from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { UserAuth } from "../context/AuthContext"

export const Navbar = () => {

  const {user ,logout } = UserAuth()
  const navigate = useNavigate()

   const handlelogout = async()=>{
    try {
      await logout()
      navigate("/")
    } catch (error) {
      console.log(error)
      
    }

   }

  return (
    <div className='flex items-center justify-between p-4 lg:px-10 z-[100] absolute w-full'>
      <Link to="/"> 
      <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
      </Link>
      
{
  user?.email? 
  <div>
    <Link to="/account"><button className='text-white pr-4'>Account</button></Link>
   <button onClick={handlelogout}   className='bg-red-600  px-6 py-2 rounded cursor-pointer text-white'>Log Out</button>
  </div>
  :
  <div>
  <Link to="/login"> <button className='text-white pr-4'>Sign In</button></Link>
  <Link to="/signup"> <button className='bg-red-600  px-6 py-2 rounded cursor-pointer text-white'>Sign Up</button></Link>  
  </div>
}
    </div>
  )
}
