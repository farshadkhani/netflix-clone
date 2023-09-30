import React from 'react'
import { Savedshows } from '../components/Savedshows'

export const Account = () => {
  return (
    <div  >

          <div className='w-full  text-white  mx-auto'>
           <img className=' w-full h-[400px] object-cover'   src="https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/76f72366-b846-4ea2-93c3-5c08d70e2705/DE-en-20230918-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="/" />
            <div className='bg-black/60 fixed top-0 left-0 w-full h-[400px]'></div>
            <div className='absolute  top-[20%] left-[20%]   md:top-[20%] md:left-[35%] p-4 md:p-8 z-10'>
                <h1 className='text-3xl md:text-5xl font-bold'>xtxdhndrghnrt</h1>
            </div>
           
          </div>

          <div className='w-[95%] mx-auto text-left '>
          <Savedshows/>
          </div>

  
    </div>
  ) 
}
