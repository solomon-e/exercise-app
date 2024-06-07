import React, { useEffect, useState } from 'react'

// components
import { fetchData, exerciseOptions } from '../utils/fetchData';
import HorizontalScroll from './HorizontalScroll';

// icons
import { CgGym } from "react-icons/cg";
import { BsSearch } from "react-icons/bs";

const bodyPartsData = ['back', 'cardio', 'chest', 'lower arms', 'lower legs', 'neck', 'shoulders', 'upper arms', 'upper legs', 'waist']

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('')
  const [bodyParts, setBodyParts] = useState([])

  // make search categories show up once at the start
  useEffect (() => {
    const fetchExercisesData = async () => {      
      //console.log('BodyPArtsData', bodyPartsData)
      setBodyParts([...bodyPartsData])
    }
    
    // call as soon as app loads
    fetchExercisesData()
  }, [setExercises])

  // make asynchronous because it will take time to pull data from the API 
  const handleSearch = async () => {
    if (search) {
      // Adds 500 exercises to the exerciseDate array
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=500&offset=0', exerciseOptions)

      //console.log('ExerciseData', exerciseData)
      
      const searchedExercises = exerciseData.filter((exercise) => 
        exercise.name.toLocaleLowerCase().includes(search)
        || exercise.target.toLocaleLowerCase().includes(search)
        || exercise.equipment.toLocaleLowerCase().includes(search)
        || exercise.bodyPart.toLocaleLowerCase().includes(search)
      )

      //console.log('Searched exercises:', searchedExercises)

      // clears input
      setSearch('')

      // Set exercises
      setExercises(searchedExercises)
    }
  }

  return (
  <>
    <div className='flex items-center max-w-sm mx-auto m-4 md:mt-16 p-4'>  
      <div className='relative w-full'>
        <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
          <CgGym className='text-base md:text-xl'/>
        </div>
        <input 
          type='text' 
          value={search}
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
          className="bg-gray-50 border border-black text-gray-900 text-sm md:text-base rounded-md focus:outline-none block w-full ps-10 p-2.5 " 
          placeholder="Search exercise..." 
          required
        />
      </div>
      <button 
        onClick={handleSearch} 
        className='p-2.5 ms-2 text-white bg-black rounded-lg border border-black hover:shadow-md'
      >
        <BsSearch className='text-xl md:text-2xl' />
      </button>
    </div>
    <div className='mt-8 flex items-center justify-center'>
      <HorizontalScroll data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} setExercises={setExercises} />
    </div>
  </>
  )
}

export default SearchExercises