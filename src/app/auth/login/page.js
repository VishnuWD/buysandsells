import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='flex justify-center items-center text-slate-800 h-[calc(100vh-10vh)]'>
        <form action="" className='flex flex-col w-1/3'>
        <h1 className='text-center text-5xl font-bold mb-8'>Login</h1>
            <label className='text-sm' htmlFor="username">User Name: </label>
            <input className='border-2 text-base rounded-lg py-2 px-3 mb-4' id='username' type="text" placeholder='Enter User Name'/>

            
            <label className='text-sm' htmlFor="password">Password: </label>
            <input className='border-2 text-base rounded-lg py-2 px-3  mb-4' id='password' type="password" placeholder='Enter User Password'/>

            <input className='bg-green-500 rounded-lg py-2 px-3 font-semibold text-white mt-4' type="submit" value={"Login"} />

            <p className='text-sm mt-2'>Don't have an account? <Link className='text-green-400' href="/auth/register">Sign-up</Link></p>
        </form>
    </div>
  )
}

export default page