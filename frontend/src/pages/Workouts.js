import React, { useEffect } from 'react';
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import { useAuthContext } from '../hooks/useAuthContext'

const Workouts = () => {
  // States
  const { workouts, dispatch } = useWorkoutsContext()
  
  // grabs user from useAuthContext
  // 'user' is null if logged out
  // 'user' an object if logged in
  const { user } = useAuthContext()

  // const [workouts, setWorkouts] = useState(null)

  // Fires once, when the component renders
  useEffect(() => {
    const fetchWorkouts = async () => {
      // Fetch the data and store the response in the object (response)
      const response = await fetch('/api/workouts', {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      })

      // Parse the JSON. json variable stores an array of objects
      const json = await response.json()

      if (response.ok) {
        dispatch({ type: 'SET_WORKOUTS', payload: json })
        // setWorkouts(json)
      }
    }

    // if there is a value for user, then invoke fetchWorkouts function
    // if not, do not invoke
    if (user) {
      // invokes fetchWorkouts function
      fetchWorkouts() 
    }
  }, [dispatch, user])  // adds dependencies for useEffect
  return (
    <div className='workouts grid md:grid-cols-3 m-4 p-4'>
        <WorkoutForm />
      <div className='workouts mx-2 md:col-span-2 grid md:grid-cols-2 md:grid-rows-3 gap-3'>
        { workouts && workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={ workout }/>
        ))}
      </div>
    </div>
  )
}
// 'workouts mx-2 md:col-span-2 grid md:grid-cols-2 gap-3'
export default Workouts