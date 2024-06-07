const mongoose = require('mongoose')  // imports mongoose

const Schema = mongoose.Schema

const workoutSchema = new Schema({
  title: { type: String, required: true },
  target: { type: String, required: false },
  reps: { type: Number, required: true },
  load: { type: Number, required: true },
  difficulty: { type: String, required: false },
  // every workout must be associated with a user
  user_id: { type: String, required: true }, // user_id associates workouts with users
}, { timestamps: true})

// const Workout = mongoose.model('Workout', workoutSchema)

module.exports = mongoose.model('Workout', workoutSchema)