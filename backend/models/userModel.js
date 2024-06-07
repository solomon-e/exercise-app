const mongoose = require('mongoose')  // imports mongoose

// bcrypt: a hashing function that hashed passwords in a secure way
const bcrypt = require('bcrypt') // imports bcrypt

const validator = require('validator') // imports validator


const Schema = mongoose.Schema

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
})

// static signup method
// cant use arrow function here because i am using 'this' keyword
userSchema.statics.signup = async function(name, email, password) {

  // Validation
  if (!name || !email || !password) {  // Checks if the fields are empty
    throw Error('All field must be filled')
  }
  // if email is valid, the if block won't fire
  if (!validator.isEmail(email)) {  // Checks if email is a valid email. Returns true if email is valid
    throw Error('Email is not valid')
  }
  if (!validator.isStrongPassword(password)) {  // Checks if password is strong.
    throw Error('Password is not strong enough')
  }

  // Checks if user exists (finds by email)
  const exists = await this.findOne({ email })

  // if user exists throw error else create user
  if (exists) {
    throw Error('Email already in use')
  }

  // Salts: random string of characters added to a password before it is hashed

  // Generate salt
  // genSalt(x): 'x' is the number of rounds or cost of the salt (default value is 10)
    // Higher 'x' equals a longer time taken to sign in
  const salt = await bcrypt.genSalt(10)

  // hash password and salt
  const hash = await bcrypt.hash(password, salt)

  // Store name, email and password in database
  const user = await this.create({ name, email, password: hash })

  return user
}

// static login method
// cant use arrow function here because i am using 'this' keyword
userSchema.statics.login = async function(email, password) {
  // Validation
  if (!email || !password) {  // Checks if the fields are empty
    throw Error('All field must be filled')
  }

  // Checks if user exists (finds by email)
  const user = await this.findOne({ email })

  // if user does not exists throw error
  if (!user) {
    throw Error('Incorrect email')
  }

  // Compares login password and user password, then returns true if they match
  const match = await bcrypt.compare(password, user.password)

  // if passwords do not match throw error
  if (!match) {
    throw Error('Incorrect password')
  }

  return user
}

module.exports = mongoose.model('User', userSchema)