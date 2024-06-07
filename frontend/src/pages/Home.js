import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className=''>
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Home























/*
import React, { useEffect } from 'react';
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

const Home = () => {
  // States
  const { workouts, dispatch } = useWorkoutsContext()

  // const [workouts, setWorkouts] = useState(null)

  // Fires once, when the component renders
  useEffect(() => {
    const fetchWorkouts = async () => {
      // Fetch the data and store the response in the object (response)
      const response = await fetch('/api/workouts')

      // Parse the JSON. json variable stores an array of objects
      const json = await response.json()

      if (response.ok) {
        dispatch({ type: 'SET_WORKOUTS', payload: json })
        // setWorkouts(json)
      }
    }

    fetchWorkouts()
  }, [dispatch])
  return (
    <div className='home grid md:grid-cols-3 p-1'>
        <WorkoutForm />
      <div className='workouts mx-2 md:col-span-2'>
        { workouts && workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={ workout }/>
        ))}
      </div>
    </div>
  )
}
// 'workouts mx-2 md:col-span-2 grid md:grid-cols-2 gap-3'
export default Home
*/