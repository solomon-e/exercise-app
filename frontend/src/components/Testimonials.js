import React, { useState } from 'react'
import image from '../assets/image1.jpeg'
import { FaQuoteLeft} from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";


const Testimonials = () => {
  const testimonial_data = [
    {
      img: image,
      content_text: `I always know how many times I've been to the gym this week vs last 
                    week. I always know what muscles are rested, too.`,
      name: 'Tiffany Terry',
      text_block: 'Fitness enthusiast',
    },
    {
      img: image,
      content_text: `Not only can you log your workouts and you also have access to various 
                    types of exercies. I like how the app provides a variety of exercises.`,
      name: 'Luca McCoy',
      text_block: 'Fitness enthusiast',
    },
    {
      img: image,
      content_text: `I like how the app provides a variety of exercises. I like
                    how the app provides a variety of exercises.`,
      name: 'Frank James',
      text_block: 'Fitness enthusiast',
    },
  ]

  // Pagination
  const [current, setCurrent] = useState(0)
  const length = testimonial_data.length

  const previous = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }
  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  return (
    <section className='bg-[#131316] h-[40vh] md:h-[60vh] lg:h-[70vh]'>
      <div className='flex items-center justify-center'>
        <div className='pt-6 m-4 md:my-10'>
          <h2 className='text-white text-3xl md:text-7xl font-semibold mb-1 md:mb-3 px-5 md:px-20'>Testimonials</h2>
          <h2 className='text-gray-500 text-sm md:text-base mb-5 md:mb-8 px-5 md:px-48'>
            What are people are saying.
          </h2>
        </div>
      </div>
      <div className='testimonials flex items-center justify-center'>
        <div className='mx-5 md:mx-44 lg:mx-80'>
          {testimonial_data.map((item, index) => index === current && 
            <div key={index}>
              <div className='pb-4 md:pb-8 flex items-start gap-2'>
                <FaQuoteLeft className='text-white text-4xl md:text-9xl pb-3 md:pb-[90px] mr-0'/>
                <h2 className='text-white text-sm md:text-3xl font-semibold'>{item.content_text}</h2>
              </div>
              <div className='flex justify-center md:justify-between'>
                <div className='flex gap-2 items-center md:justify-start'>
                  <div>
                    <img src={item.img} className='w-5 h-5 md:w-8 md:h-8 rounded-full' alt='' />
                  </div>
                  <div>
                    <h6 className='text-white text-xs md:text-sm'>
                      <span className='font-medium'>{item.name} </span> 
                      <span className='text-sm md:text-base font-medium text-gray-600'>| </span> 
                      <span className='font-light text-gray-400'>{item.text_block}</span>
                    </h6>
                  </div>
                </div>
                <div className='hidden md:flex gap-6 text-white mr-5'>
                  <FaArrowLeftLong onClick={previous} className='hover:border border-white text-5xl rounded p-2' /> 
                  <FaArrowRightLong onClick={next} className='hover:border border-white text-5xl rounded p-2' />
                </div>
              </div>
              <div className='md:hidden flex items-center justify-center gap-5 text-white mt-6'>
                <FaArrowLeftLong onClick={previous} className='text-2xl font-bold' /> 
                <FaArrowRightLong onClick={next} className='text-2xl font-bold' />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Testimonials