import React from 'react'
import { fetchData, exerciseOptions } from '../utils/fetchData';

const BodyPart = ({ item, bodyPart, setBodyPart, setExercises }) => {  

  const searchByBodyPart = async (bodyPart) => {
    // You can also fetch exercises for the new body part here
    setBodyPart(item)
    //console.log('Body part: ', bodyPart)

    let exerciseByBodyPart = []

    // when a bodypart button is clicked it fetches exercises for the body part
    exerciseByBodyPart = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=36&offset=0`, exerciseOptions)

    setExercises(exerciseByBodyPart)
  }
  
  return (
    <div className='bodypart-card p-1 m-1 md:p-1 md:m-2'>
      <button onClick={() => searchByBodyPart(item)} className='bg-black text-white text-xs md:text-base font-normal p-2 md:p-3 rounded-md hover:-translate-y-1 hover:scale-110 duration-300 uppercase whitespace-nowrap focus:animate-bounce focus:bg-indigo-700 cursor-pointer'>
        {item}
      </button>
    </div>
  )
}

export default BodyPart