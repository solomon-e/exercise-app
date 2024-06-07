import React, { useContext } from 'react'
import BodyPart from './BodyPart'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'

const HorizontalScroll = ({ data, bodyPart, setBodyPart, setExercises }) => {
  //console.log('ScrollBodyPart:', bodyPart)
  return (
    <div className='p-5 w-[300px] md:w-[800px] overflow-x-hidden'>
      <h1 className='flex items-center justify-center text-xs md:text-sm uppercase font-light mb-3 md:mb-6'>
        ← Scroll →
      </h1>
      
      <ScrollMenu>
        {data.map((item) => (
          <BodyPart 
            key={item.id || item}
            itemID={item.id || item}
            item={item} 
            bodyPart={bodyPart} 
            setBodyPart={setBodyPart}
            setExercises={setExercises}
          />
        ))}
      </ScrollMenu>
      <h1 className='flex items-center justify-center text-xs md:text-sm uppercase font-light mt-3 md:mt-6'>
        ← Scroll →
      </h1>
    </div>
  )
}

export default HorizontalScroll