import React, { useState } from 'react'
import SearchExercises from '../components/SearchExercises'
import ExerciseList from '../components/ExerciseList'

const Exercises = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([])

  return (
    <div className='md:mt-24'>
      <h2 className='text-lg md:text-4xl font-medium p-3 flex items-center justify-center'>Explore various exercises</h2>
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <ExerciseList exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} />
    </div>
  )
}

export default Exercises