require('dotenv').config()

const express = require('express')    // imports express
const cors = require('cors')          // imports cors
const mongoose = require('mongoose')  // imports mongoose
const workoutRoutes = require('./routes/workouts')  // imports workoutRoutes
const userRoutes = require('./routes/user')  // imports userRoutes

// express app
const app = express()

// Connect to database. Asynchronous and returns a promise
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // Listen for requests
    app.listen(process.env.PORT, () => {
      console.log('Connected to database & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log('Error connecting to database:', error)
  })

// Middleware. 
  // Sets correct headers on the response so chrome allows you to communicate with a cross origin (different ports).
app.use(cors())

// Middleware: 
  // - looks if any request has some body (data being sent to the server)
  // - if it does, it attached it to the request object. We can then access it in the request handler with (req.body).
app.use(express.json())


// Middleware
  // - This middleware logs the request path and method for every request
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// Routes
  // This grabs all the routes in workouts.js and attaches them to the app
app.use('/api/workouts', workoutRoutes)
  // This grabs all the routes in user.js and attaches them to the app
app.use('/api/user', userRoutes) 
