import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
  // States
  const [error, setError] = useState(null)
  const [isLoading, setisLoading] = useState(null)
  const { dispatch } = useAuthContext()
  const navigate = useNavigate();

  const signup = async (name, email, password) => {
    setisLoading(true)
    
    // Resets the error at teh start every request
    setError(null)

    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}api/user/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ name, email, password })
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
      //localStorage.setItem('user', JSON.stringify(json)) // restringify the 'json' object

      // update the auth context
      //dispatch({ type: 'LOGIN', payload: json })

      // if response is ok, move to login page
      //window.location.href = '/login' // this only works in development
      navigate('/login')

      setisLoading(false)
    }
  }

  // returns the signup function and variables 'signup', 'isLoading', 'error'
  return { signup, isLoading, error }
}