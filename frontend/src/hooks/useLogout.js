import { useAuthContext } from './useAuthContext'
import { useWorkoutsContext } from './useWorkoutsContext'

export const useLogout = () => {
  const { dispatch } = useAuthContext()

  // 
  const { dispatch: workoutsDispatch } = useWorkoutsContext()

  const logout = () => {
    // remove user from local storage
    localStorage.removeItem('user')

    // dispatch a logout action
    dispatch({ type: 'LOGOUT'})

    // clears the global workouts state when logging out
    workoutsDispatch({ type: 'SET_WORKOUTS', payload: null })
  }

  // returns the logout function
  return { logout }
}