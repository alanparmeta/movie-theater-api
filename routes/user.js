const express = require('express')
const userRouter = express.Router()

const { Show, User } = require('../models')

// GET All users
userRouter.get('/', async (request, result) => {
  try {
    const allUsers = await User.findAll()
    res.status(200).send(allUsers))
  } catch (err) { console.log('Could not get all users') }
}

// GET One user
userRouter.get('//:id', async (request, result) => {
    try {
    const user = await User.findOne({({id: request.params.id})
    res.status(200).send(user))
    }) catch (err) { console.log('Could not get one user') }
}

// GET shows watched by one user
userRouter.get("/:id/shows", async (request, result) => {
    try {
  const user = await User.findOne({id: req.params.id});
  res.status(200).send(user.getShows());
})

// GET all shows

// GET one show

// GET shows of a specific genre

// PUT status of a show

// PUT rating of a show

// PUT a show if a user watched it

// DELETE one show

module.exports = userController;