import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// pages & components
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Workouts from './pages/Workouts';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Exercises from './pages/Exercises';
import Contact from './pages/Contact';

// styles
import './App.css'


function App() {
  // grabs user from useAuthContext
  // 'user' is null if logged out
  // 'user' an object if logged in
  const { user } = useAuthContext()

  return (
    <div className='App h-screen bg-white'>
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/exercises' element={user ? <Exercises /> : <Navigate to='/' />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/workouts' element={user ? <Workouts /> : <Navigate to='/' />} />
            <Route path='/login' element={!user ? <Login /> : <Navigate to='/workouts' />} />
            <Route path='/signup' element={!user ? <Signup /> : <Navigate to='/workouts' />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
  
}

export default App;

// ------------------ NOTE -------------------
// 
/*  
{user ? <Workouts /> : <Navigate to='/' />}
  - if logged in show <Workouts />. if logged out navigate to <Home />
  - used to protect the route from people who are not logged in
*/