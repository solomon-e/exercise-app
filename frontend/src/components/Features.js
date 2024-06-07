import React from 'react'

const Features = () => {
  return (
    <section className='features m-4 p-4 my-10 md:mx-16 md:p-32 md:mt-56 md:mb-36 bg-[#BDC5C7] rounded'>
      <div className='grid md:grid-cols-3 gap-6 p-4'>
        <div className='md:py-24 md:px-10'>
          <h2 className='text-3xl md:text-6xl font-semibold'>Features</h2>
          <p className='text-gray-500 text-sm md:text-base'>What makes us different?</p>
        </div>
        <div className='grid md:col-span-2 md:grid-cols-2 md:grid-rows-2'>
          <div className='my-2 md:m-2 md:p-2'>
            <h2 className='block md:text-2xl font-semibold'>Workout Log</h2>
            <p className='text-sm md:text-base text-gray-600 font-normal '>
              Plan it, create it, log it.
            </p>
          </div>
          <div className='my-2 md:m-2 md:p-2'>
            <h2 className='block md:text-2xl font-semibold'>Exercises</h2>
            <p className='text-sm md:text-base text-gray-600 font-normal '>
              Access to a wide range of exercises for you to explore.
            </p>
          </div>
          <div className='my-2 md:m-2 md:p-2'>
            <h2 className='block md:text-2xl font-semibold'>Secure Data Storage</h2>
            <p className='text-sm md:text-base text-gray-600 font-normal '>
              Your data is safe and secure with us.
            </p>
          </div>
          <div className='my-2 md:m-2 md:p-2'>
            <h2 className='block md:text-2xl font-semibold'>Responsive</h2>
            <p className='text-sm md:text-base text-gray-600 font-normal '>
              Our app is fully responsive, providing a diverse user experience across all devices.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features