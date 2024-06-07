const express = require('express')    // imports express
const {
  getAllWorkouts,
  getSingleWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout
} = require('../controllers/workoutController')

const requireAuth = require('../middleware/requireAuth')

// invokes an instance of the router
const router = express.Router()

/* REQUIRE AUTH FOR ALL WORKOUT ROUTES
    - Fires the requireAuth middleware function before routes to protect the routes
    - if the user is not authenticated, it sends back an error and they neveer reach the contoller functions
    - if they are authenticated, we attach user to request object an call next()
*/
router.use(requireAuth)

// All routes here begin with '/api/workouts'

// GET all workouts
router.get('/', getAllWorkouts)

// GET a single workouts
router.get('/:id', getSingleWorkout)

// POST a new workout 
router.post('/', createWorkout)

// DELETE a workout 
router.delete('/:id', deleteWorkout)

// UPDATE a workout 
router.patch('/:id', updateWorkout)

// exports router
module.exports = router