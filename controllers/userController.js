const { User, Show } = require("../models")

async function getAllUsers(req, res) {
    try {
        const users = await User.findAll()
        res.status(200).send(users)
    } catch (e) {
        res.status(500).send({error: 'Error fetching all users'})
    }        
}

async function getUser(req, res) {
    const userId = req.params.id
    try {
        const user = await User.findByPk(userId)
        if (user)
            res.status(200).send(user)
        else
            res.status(404).send({error: 'User does not exist'})
    } catch (e) {
        res.status(500).send({error: 'Error fetching user'})
    }
}

async function getShows(req, res) {
    const userId = req.params.id
    try {
        const { shows } = await User.findByPk(userId, { include: Show })
       
        if (shows)
            res.status(200).send(shows)
        else
            res.status(404).send({error: 'User/Shows does not exist'})
    } catch (e) {
        console.log(e)
        res.status(500).send({error: 'Error fetching shows'})
    }
}

async function getShow(req, res) {
    const userId = req.params.id
    const showId = req.params.id

    try {
        const user = await User.findByPk(userId, { include: { model: Show } } )
        if (!user)
            return res.status(404).send({error: 'User does not exist'})
        
        const show = user.shows.find(show => show.id === showId)
        if (!show) {
            await user.addShow(req.body)
        }
        else {
            show.set(req.body)
            await show.save()
        }

        res.sendStatus(200)
    } catch (e) {
        res.status(500).send({ error: 'Error updating/adding show' })
    }

}


module.exports = { getAllUsers, getUser, getShows, getShow }