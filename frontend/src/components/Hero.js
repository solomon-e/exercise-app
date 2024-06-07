import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/workoutimg1.jpeg'

const Hero = () => {
  return (
    <section className='bg-white h-[35vh] md:h-[60vh] lg:h-[70vh] flex'>
      <div className='mx-6 my-6 mt-14 md:m-36'>
        <h1 className='text-black text-2xl md:text-7xl font-semibold mb-1 md:mb-3'>
          Track Your Fitness Journey Crush Your Goals
        </h1>
        <p className='my-2 md:my-2 text-sm md:text-lg mb-5 md:mb-7'>
          Reach your fitness goals <span className='font-medium uppercase'>today</span> with our workout app
        </p>
        <Link to='/signup' className='bg-indigo-500 text-white font-semibold p-3 text-xs md:text-sm rounded hover:shadow-md mt-2'>
          Get Started Today →
        </Link>
      </div>
    </section>
  )
}

export default Hero