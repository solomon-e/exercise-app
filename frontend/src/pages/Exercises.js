import React, { useState } from 'react'
import SearchExercises from '../components/SearchExercises'
import ExerciseList from '../components/ExerciseList'
import Footer from '../components/Footer'

const Exercises = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([])


  // I added this myself
  const handleBodyPartChange = async (newBodyPart) => {
    setBodyPart(newBodyPart)
    // You can also fetch exercises for the new body part here
  }
  //console.log('newBodypart:', bodyPart)
  return (
    <div className='md:mt-24'>
      <h2 className='text-lg md:text-4xl font-medium p-3 flex items-center justify-center'>Explore various exercises</h2>
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <ExerciseList exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} />
    </div>
  )
}

export default Exercises

/* Original code before change

<div className='m-4 p-4'>
  <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
  <ExerciseList exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} />
</div>
*/