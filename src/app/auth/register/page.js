import Link from 'next/link'
import React from 'react'

function page() {
  return (
    
    <div className='flex justify-center items-center text-slate-800 h-[calc(100vh-10vh)]'>
      
        <form action="" className='flex flex-col '>
          <h1 className='text-center text-5xl font-bold mb-8'>Register</h1>
        <label className='text-sm' htmlFor="name">Name: </label>
            <input className='border-2 text-base rounded-lg py-2 px-3 mb-4' id='username' type="text" placeholder='Market@mail.com'/>

            <label className='text-sm' htmlFor="username">Email: </label>
            <input className='border-2 text-base rounded-lg py-2 px-3 mb-4' autoComplete='false' id='username' type="text" placeholder='Market@mail.com'/>

            <div className='flex gap-2'>
              <div className='flex flex-col'>
              <label className='text-sm' htmlFor="password">Create Password: </label>
            <input className='border-2 text-base rounded-lg py-2 px-3  mb-4' id='password' type="password" placeholder='Enter Password'/>

              </div>
           <div className='flex flex-col'>
           <label className='text-sm' htmlFor="re-password">Re-enter Password: </label>
            <input className='border-2 text-base rounded-lg py-2 px-3  mb-4' id='re-password' type="password" placeholder='Re-enter Password'/>

           </div>
            
            </div>
       
            <input className='bg-green-500 rounded-lg py-2 px-3 font-semibold text-white mt-4' type="submit" value={"Next"} />

        <p className='text-sm mt-2'>Already have an account? <Link className='text-green-400' href="/auth/login">Sign-In</Link></p>
        </form>
    </div>
  )
}

export default page