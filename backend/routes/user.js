const express = require('express')    // imports express

// Controller functions
const { loginUser, signupUser } = require('../controllers/userController')

// invokes an instance of the router
const router = express.Router()

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)


// exports router
module.exports = router