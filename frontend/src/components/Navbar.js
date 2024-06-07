import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { RxHamburgerMenu } from "react-icons/rx"
import { CgGym } from "react-icons/cg"
import { LiaTimesSolid } from "react-icons/lia"

const NavLinks = () => {
  const { logout } = useLogout()

  // user is used to check if logged in or not
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }
  return (
    <>
      {user && (
        <>
          <Link to='/' className='text-xs md:text-sm font-semibold uppercase p-1 my-1 md:mr-4 hover:border-b-2 border-black focus:border-b-2'>
            Home
          </Link>
          <Link to='/exercises' className='text-xs md:text-sm font-semibold uppercase p-1 my-1 md:mr-4 hover:border-b-2 border-black focus:border-b-2'>
            Exercises
          </Link>
          <Link to='/workouts' className='text-xs md:text-sm font-semibold uppercase p-1 my-1 md:mr-4 hover:border-b-2 border-black focus:border-b-2'>
            Workouts Log
          </Link>
          <span className='font-normal text-xs md:text-sm m-2'>{user.email}</span>
          <button onClick={handleClick} className='text-xs md:text-sm font-semibold uppercase p-2 my-1 md:mr-4 mb-2 md:mb-0 rounded text-white bg-black hover:shadow-md'>
            Logout
          </button>
        </>
      )}
      {!user && (
        <>
          <Link to='/' className='text-xs md:text-sm font-semibold uppercase p-1 my-1 md:mr-4 hover:border-b-2 border-black focus:border-b-2'>
            Home
          </Link>
          <Link to='/login' className='text-xs md:text-sm font-semibold uppercase p-2 my-1 md:mr-4 rounded text-white bg-black hover:shadow-md'>
            Login
          </Link>
          <Link to='/signup' className='text-xs md:text-sm font-semibold uppercase p-2 my-1 md:mr-4 mb-2 md:mb-0 rounded text-white bg-black hover:shadow-md'>
            Signup
          </Link>
        </>
      )}
    </>
  )
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };
  return (
    <>
      <header className='bg-white'>
        <div className='text-xl md:text-3xl font-semibold bg-white px-5 py-6 md:px-14 md:py-10 flex items-center justify-between'>
          <Link to='/' className='flex items-center font-medium'>
          <CgGym className='text-3xl md:text-4xl bg-black md:bg-white md:text-black text-white p-1 rounded'/><h1 className='hidden md:flex'> Gym Buddy</h1>
          </Link>
          <div className='md:hidden'>
            <button onClick={toggleNavbar}>
              {isOpen ? <LiaTimesSolid className='text-3xl'/> : <RxHamburgerMenu className='text-3xl'/>}
            </button>
          </div>
          <div className='mdnavlinks hidden w-full md:block md:w-auto' id='navbar-default'>
            <NavLinks />
          </div>
        </div>
      </header>
      {isOpen && (
        <div className='mobilenavlinks md:hidden flex basis-full flex-col items-center bg-white'>
          <NavLinks />
        </div>
      )}
    </>
  )
}

export default Navbar