import React,{ createContext, useReducer, useEffect } from "react"

// Create context
export const AuthContext = createContext()

export const authReducer = (state, action) => {
  // Handle cases
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload }
    case 'LOGOUT':
      return { user: null }
    default:
      return state
  }
}

// Returns the actual provider of the context created
  // 'children' represents whatever the context provider wraps around
  // Here is represent the App component. Therefore, all components have access to the 'AuthContext'
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null
  })

  // [] means only fire this useEffect function once, when the component renders
  // Checks if there is a value for the token in the local storage
  useEffect(() => {
    // Parsing because user is stored in local storage as a JSON string
    // Need to parse into an object we can use in javascript
    const user  = JSON.parse(localStorage.getItem('user'))  //trys to get user from local storage

    // if user has value, update global state to match user in local storage
    if (user) {
      dispatch({ type: 'LOGIN', payload: user})
    }
  }, [])

  //console.log('AuthContext state:', state)

  return(
    <AuthContext.Provider value={{...state, dispatch}}>
      { children }
    </AuthContext.Provider>
  )
}