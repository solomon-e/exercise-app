import React, { useState } from 'react'
import ExerciseCard from './ExerciseCard'

const ExerciseList = ({ exercises, setExercises, bodyPart}) => {
  // Added these
  const [currentPage, setCurrentPage] = useState(1)

  // adjust this value to change the number of exercises per page
  const [exercisesPerPage, setExercisesPerPage] = useState(8)

  const totalPages = Math.ceil(exercises.length / exercisesPerPage)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const startIndex = (currentPage - 1) * exercisesPerPage;
  const endIndex = startIndex + exercisesPerPage;
  const currentPageExercises = exercises.slice(startIndex, endIndex);

  //console.log('Received exercises:', exercises)
  return (
    <div id='exerciselist' className='mx-auto m-4 p-4 md:px-20'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-5 p-3'>
        {currentPageExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </div>
      <div className='flex justify-center p-3'>
        {Array(totalPages).fill(0).map((_, index) => (
          <button
            key={index}
            className={`px-3 py-2 rounded ${currentPage === index + 1 ? 'bg-black text-white' : 'bg-white text-black'}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ExerciseList