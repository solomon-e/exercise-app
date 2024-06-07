const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

// next() function: is invoked to move on to the next middleware

// await can only be used a an async function
const requireAuth = async (req, res, next) => {

  // verify authentication
  const { authorization } = req.headers

  // checks if authorization has a value
  if (!authorization) {
    return res.status(400).json({ error: 'Authorzation token required' })
  }

  // token format 'Bearer njdnjvnadofvnaodfvnodsndinowilnbqipnab'
  // I need to get the token (this part 'njdnjvnadofvnaodfvnodsndinowilnbqipnab') this is a position 1
  // use split function to split by a space ' '

  // gets the second item in array (the token)
  const token = authorization.split(' ')[1]

  try {
    // try to verify the token. Returns the payload of the token
    const { _id } = jwt.verify(token, process.env.SECRET)

    // use _id payload to find user in database
    // selects '_id' property from the _id payload
    // stores the resulting document/object as the user property on the request object. 
    // req.user can be called anything (i.e. req.tst or req.abc)
    req.user = await User.findOne({ _id }).select('_id')

    // makes user from req.user available in the next function
    next()

  } catch (error) {
    console.log(error)
    res.status(401).json({ error: 'Request is not authorized' })
  }
}

module.exports = requireAuth