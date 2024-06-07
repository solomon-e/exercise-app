const Workout = require('../models/workoutModel')   // imports Workout model
const mongoose = require('mongoose')  // imports mongoose

// Get all workouts
const getAllWorkouts = async (req, res) => {
  // find user id
  const user_id = req.user._id

  // Gets all the workout objects/documents in a array (workouts) created by user associated with user_id
  // Sorts according to when created
  const workouts = await Workout.find({user_id}).sort({ createdAt: -1 })

  // Sends the array (workouts) as JSON back to the client (browser)
  res.status(200).json(workouts)
}

// Get a single workout
const getSingleWorkout = async (req, res) => {
  // Gets a workout id
  const { id } = req.params

  // Check if the id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Workout does not exist' })
  }

  const workout = await Workout.findById(id)

  if (!workout) {
      return res.status(400).json({ error: 'Workout does not exist' })
  }
  res.status(200).json(workout)
}

// Create new workout
  // - async: Asynchronous function
  // - await: is used to wait for a Promise
const createWorkout = async (req, res) => {
  const { title, target, reps, load, difficulty } = req.body

  // Hn
  let emptyFields = []

  // Checks if fields are empty
  if (!title) {
    emptyFields.push('title')
  }
  if (!reps) {
    emptyFields.push('reps')
  }
  if (!load) {
    emptyFields.push('load')
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill all fields', emptyFields })
  }

  // Add document to database
  try {
    // adds user_ to created workouts
    // get user property from middleware (requireAuth)
    const user_id = req.user._id  // store _id in user_id

    // creates a new workout object/document with properties (title, reps, load)
    const workout = await Workout.create({ title, target, reps, load, difficulty, user_id })  
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// Delete a workout
const deleteWorkout = async (req, res) => {
  // Gets a workout id
  const { id } = req.params

  // Check if the id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Workout does not exist' })
  }

  // Find workout by id
  const workout = await Workout.findOneAndDelete({ _id: id })

  if (!workout) {
    return res.status(400).json({ error: 'Workout does not exist' })
  }
  res.status(200).json(workout)
}

// Update a workout
const updateWorkout = async (req, res) => {
  // Gets a workout id
  const { id } = req.params

  // Check if the id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Workout does not exist' })
  }

  // Find workout by id
  // '...' (Spread operator): is used to spread out elements of an array or object
  const workout = await Workout.findOneAndUpdate({ _id: id }, {
    ...req.body
  })

  if (!workout) {
    return res.status(400).json({ error: 'Workout does not exist' })
  }
  res.status(200).json(workout)
}

// // exports controllers used in workouts.js
module.exports = {
  getAllWorkouts,
  getSingleWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout
}