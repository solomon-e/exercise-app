import React from 'react'

const ExerciseCard = ({ exercise }) => {
  return (
    <div className='exercisecard bg-black text-white border border-black p-2 rounded'>
      <div className='block mx-auto'>
        <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' className='block mx-auto mb-2 p-1 rounded-lg' />
      </div>
      <div>
        <h2 className='font-semibold text-base md:text-lg p-1 m-1 uppercase'>{exercise.name}</h2>
        <h2 className='font-semibold text-xs md:text-sm p-1 m-1'>Main Target: <span className='font-normal'>
          {exercise.target.charAt(0).toUpperCase() + exercise.target.slice(1)}
        </span></h2>
        <h2 className='font-semibold text-xs md:text-sm p-1 m-1'>Secondary Target: <span className='font-normal'>
          {exercise.secondaryMuscles.map(muscle => muscle.charAt(0).toUpperCase() + muscle.slice(1)).join(', ')}
        </span></h2>
        <h2 className='font-semibold text-xs md:text-sm p-1 m-1'>Equipment: <span className='font-normal'>
          {exercise.equipment.charAt(0).toUpperCase() + exercise.equipment.slice(1)}
        </span></h2>
      </div>
    </div>
  )
}

export default ExerciseCard