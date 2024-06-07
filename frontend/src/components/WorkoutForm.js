import React, { useState } from 'react';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import { useAuthContext } from '../hooks/useAuthContext'

const WorkoutForm = () => {
  //styles
  const input_style = `text-sm md:text-base shadow border border-black rounded
                      w-full py-2 px-3 text-gray-700 focus:outline-none`
  const errorStyle = `animate-pulse text-xs md:text-sm rounded-sm text-[#EE332F] font-normal
                      border border-[#EE332F] bg-[#FDEDEC] p-2`
  const empty_input = `text-sm md:text-base shadow border border-[#F15855] rounded 
                      w-full py-2 px-3 text-gray-700 focus:outline-none`

  // Grabs the dispatch function
  const { dispatch } = useWorkoutsContext()

  // grabs user from useAuthContext
  // 'user' is null if logged out
  // 'user' an object if logged in
  const { user } = useAuthContext()
  
  // States
  const [title, setTitle] = useState('')
  const [target, setTarget] = useState('')
  const [reps, setReps] = useState('')
  const [load, setLoad] = useState('')
  const [difficulty, setDifficulty] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    // Prevent the default action of submitting
    e.preventDefault()

    // checks if we have a user on submit
    // if we don't set error and return
    // if there is a user, we send the bearer token in the Authorization header
    if (!user) {
      setError('You must be logged in')
      return 
    }

    // Dummy workout object to send as the body of the request
    // This did not work
    // const workout = { title, reps, load }
    
    console.log(error)

    const response = await fetch('/api/workouts', {
      method: 'POST',
      // body: JSON.stringify(workout),
      body: JSON.stringify({
        title,
        target,
        reps,
        load,
        difficulty,
      }),
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
      },
    })

    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }

    if (response.ok) {
      // Reset the form
      setTitle('')
      setTarget('')
      setReps('')
      setLoad('')
      setDifficulty('')
      setError(null)
      setEmptyFields([])
      console.log('New workout added', json)
      dispatch({ type: 'CREATE_WORKOUT', payload: json})
    }
  }

  return (
    <div className='bg-white my-4 mx-2 shadow-md rounded-md py-5 px-4 h-fit border border-black'>
      <form className='create-workout' onSubmit={ handleSubmit }>
        <h3 className='font-semibold text-lg md:text-2xl uppercase mb-3'>Add Workout</h3>

        <div className='mb-4'>
          <label className='block text-gray-700 text-xs md:text-sm font-medium mb-2'>Exercise Name:</label>
          <input 
            className={ emptyFields.includes('title') ? empty_input : input_style }
            type='text'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 text-xs md:text-sm font-medium mb-2'>Target: </label>
          <input 
            className={ input_style }
            type='text'
            onChange={(e) => setTarget(e.target.value)}
            value={target}
          />
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 text-xs md:text-sm font-medium mb-2'>Reps: </label>
          <input 
            className={ emptyFields.includes('reps') ? empty_input : input_style }
            type='number'
            onChange={(e) => setReps(e.target.value)}
            value={reps}
          />
        </div>

        <div className='mb-4 md:mb-6'>
          <label className='block text-gray-700 text-xs md:text-sm font-medium mb-2'>Weight (lbs): </label>
          <input 
            className={ emptyFields.includes('load') ? empty_input : input_style }
            type='number'
            onChange={(e) => setLoad(e.target.value)}
            value={load}
          />
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 text-xs md:text-sm font-medium mb-2'>Difficulty: </label>
          <input 
            className={ input_style }
            type='text'
            onChange={(e) => setDifficulty(e.target.value)}
            value={difficulty}
          />
        </div>
        <button 
          className='text-white bg-black hover:shadow-md text-xs md:text-sm font-semibold rounded-sm p-2 mb-2' type='submit'>
          Add Workout
        </button>
        { error && <div className={ errorStyle }>{ error }</div> }
      </form>
    </div>
  )
}

export default WorkoutForm