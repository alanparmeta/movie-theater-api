const { Router, request } = require('express')
const userRouter = express.Router()

const { Show, User } = require('../models')

// GET All users
userRouter.get('/', async (reqest, result) => {
  try {
    const allUsers = await User.findAll()
    res.status(200).send(allUsers))
  } catch (err) { console.log('Could not get all users') }
}

// GET One user
userRouter.get('/one', async (reqest, result) => {
    try {
    const user = await User.findOne({({id: request.params.id})
    res.status(200).send(user))
    }) catch (err) { console.log('Could not get one user') }
}