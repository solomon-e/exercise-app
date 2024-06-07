const User = require('../models/userModel')   // imports User model
const jwt = require('jsonwebtoken') // imports jsonwebtoken

// '3d' (3 days): refers to how long the token is valid for
const createToken = (_id) => {
  return jwt.sign({ _id}, process.env.SECRET, { expiresIn: '3d' })
}

// login user
/* 
  Logic:
    - Take the email and password used to login
    - Match that against a document/object already in the database
    - If the email exists in database
      - Compare passwords to verify login
      If it matches create token and sent to client
*/
const loginUser = async (req, res) => {
  // grabs email and password from body
  const { email, password } = req.body  

  try {
    const user = await User.login(email, password)

    // Create token
    const token = createToken(user._id)

    res.status(200).json({ email, token })
  } catch (error) {
    res.status(400).json({ error: error.message})
  }
} 

// signup user
const signupUser = async (req, res) => {
  const { name, email, password } = req.body

  try {
    const user = await User.signup(name, email, password)

    // Create token
    const token = createToken(user._id)

    res.status(200).json({ email, token })
  } catch (error) {
    res.status(400).json({ error: error.message})
  }
}

// exports controllers used in user.js
module.exports = { loginUser, signupUser }