import React from 'react'
import { FaTrashCan } from "react-icons/fa6";
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import { useAuthContext } from '../hooks/useAuthContext'

// imports date-fns
import { formatDistanceToNow } from 'date-fns'

const WorkoutDetails = ({ workout }) => {
  // Grabs the dispatch function
  const { dispatch } = useWorkoutsContext()

  // grabs user from useAuthContext
  // 'user' is null if logged out
  // 'user' an object if logged in
  const { user } = useAuthContext()

  const handleClick = async () => {
    // checks if we have a user on submit
    // if we don't have a user, return
    // if there is a user, we send the bearer token in the Authorization header
    if (!user) {
      return 
    }

    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}api/workouts/` + workout._id, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (response.ok) {
      // Here, the payload is the document/object we are deleting
      dispatch({ type: 'DELETE_WORKOUT', payload: json})
    }
  }

  return (
    <div className='workout-details bg-white my-4 shadow-md rounded-md py-5 px-5 cursor-pointer border border-black'>
      <div className='flex justify-between'>
        <h4 className='font-semibold text-lg md:text-2xl uppercase mb-3'>{ workout.title }</h4>
        <button 
          onClick={handleClick} 
          className='text-black transition hover:-translate-y-1 hover:scale-110 duration-300 text-base md:text-xl py-1 px-1 rounded-sm'
        >
          <FaTrashCan />
        </button>
      </div> 
      <p className='text-gray-700 text-sm md:text-base font-normal uppercase'><span className='font-semibold'>Target: </span>{ workout.target }</p>
      <p className='text-gray-700 text-sm md:text-base font-normal uppercase'><span className='font-semibold'>Reps: </span>{ workout.reps }</p>
      <p className='font-normal'>
        <span className='text-gray-700 text-sm md:text-base font-semibold uppercase'>Weight </span> 
        <span className='text-gray-700 text-sm md:text-base font-semibold'>(lbs): </span>{ workout.load }
      </p>
      <p className='text-gray-700 text-sm md:text-base font-normal uppercase'><span className='font-semibold'>Difficulty: </span>{ workout.difficulty }</p>
      <p className='text-xs md:text-sm font-light my-2'>created { formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true }) }</p>
    </div>
  )
}

export default WorkoutDetails