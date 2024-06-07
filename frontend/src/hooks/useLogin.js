// SIMILAR LOGIC TO useSignup
import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
  // States
  const [error, setError] = useState(null)
  const [isLoading, setisLoading] = useState(null)
  const { dispatch } = useAuthContext()

  // funtion takes in only email and password
  const login = async (email, password) => {
    setisLoading(true)
    
    // Resets the error at teh start every request
    setError(null)

    const response = await fetch('api/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password })
    })
    // Need await because its asynchronous
    // On success, returns info with jsonwebtoken. On failure, send error.
    const json = await response.json()

    // Checks if response failed 
    if (!response.ok) {
      setisLoading(false)
      setError(json.error)
    }

    // Checks if response was a success
    if (response.ok) {
      // save the user to local storage. Have to store strings inside local storage
      // setItem: to set new item
      localStorage.setItem('user', JSON.stringify(json)) // restringify the 'json' object

      // update the auth context
      dispatch({ type: 'LOGIN', payload: json })

      setisLoading(false)
    }
  }

  // returns the login function and variables 'signup', 'isLoading', 'error'
  return { login, isLoading, error }
}