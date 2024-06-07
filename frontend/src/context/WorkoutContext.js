import React,{ createContext, useReducer } from "react";

// Create context
export const WorkoutContext = createContext()

export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_WORKOUTS':
      return {
        workouts: action.payload
      }
    case 'CREATE_WORKOUT':
      return {
        workouts: [action.payload, ...state.workouts]
      }
    case 'DELETE_WORKOUT':
      return {
        // Filter through the current workouts on the current state
        // 'w._id !== action.payload._id'
          // keep workouts where 'w._id != action.payload._id' in the array
        workouts: state.workouts.filter((w) => w._id !== action.payload._id)
      }
    default:
      return state
  }
}

// Returns the actual provider of the context created
  // 'children' represents whatever the context provider wraps around
  // Here is represent the App component. Therefore, all components have access to the 'WorkoutContext'
export const WorkoutContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, {
    workouts: null
  })

  return(
    <WorkoutContext.Provider value={{...state, dispatch}}>
      { children }
    </WorkoutContext.Provider>
  )
}