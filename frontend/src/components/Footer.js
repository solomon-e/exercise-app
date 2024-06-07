import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer h-[100px] md:h-[120px] border-t border-black'>
      <div className='m-4 p-3 md:px-14 md:py-5 flex items-center justify-between'>
        <div className='flex items-center '>
          <h2 className='text-sm md:text-sm font-medium mx-2 hidden md:flex'>Register for free!</h2>
          <Link to='/signup' className='text-xs md:text-sm font-semibold uppercase p-2 my-1 md:mr-4 mb-2 md:mb-0 rounded text-white bg-black hover:shadow-md'>
            Signup
          </Link>
        </div>
        <div>
          <Link to='/contact' className='text-xs md:text-sm font-semibold uppercase p-1 my-1 md:mr-4 hover:border-b-2 border-black'>
            Contact
          </Link>
          <Link to='' className='text-xs md:text-sm font-semibold uppercase p-1 my-1 md:mr-4 hover:border-b-2 border-black'>
            About
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer