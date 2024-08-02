import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <header className='h-[10vh] border-b-2 text-slate-800 flex justify-between items-center px-8'>
        <h2 className='text-3xl font-bold '>Buys<span className='text-green-500'>&</span>Sells</h2>
        <nav>
            <Link className='navlinks' href="#">About</Link>
            <Link className='navlinks' href="#"></Link>
            <Link className='navlinks' href="#"></Link>
            <Link className='navlinks' href="#"></Link>

        </nav>
    </header>
  )
}

export default Navbar