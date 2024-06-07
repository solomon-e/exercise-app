import React, { useState } from 'react'

const Contact = () => {
  const [fullname, setFullName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    setFullName('');
    setContactEmail('');
    setMessage('');
  }

  return (
    <div className='w-full max-w-lg md:max-w-2xl mx-auto rounded items-center m-4 p-4'>
      <form onSubmit={sendEmail} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border border-black'>
        <div className='mb-4'>
          <h1 className='font-semibold text-lg md:text-2xl'>Share your thoughts</h1>

        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-xs md:text-sm font-medium mb-2'>Full Name</label>
          <input
            type='text'
            value={fullname}
            className='text-sm md:text-base border-b border-black w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-b-2'
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-xs md:text-sm font-medium mb-2'>Email</label>
          <input
            type='email'
            value={contactEmail}
            className='text-sm md:text-base border-b border-black w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-b-2'
            onChange={(e) => setContactEmail(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-xs md:text-sm font-medium mb-2'>Message</label>
          <textarea
            value={message}
            className='text-sm md:text-base border-b border-black bg-gray-50 w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-b-2'
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button className='mt-5 text-sm md:text-base uppercase bg-black text-white font-medium py-2 px-4 rounded hover:shadow-md w-full'>
          Send
        </button>
      </form>
    </div>
  )
}

export default Contact