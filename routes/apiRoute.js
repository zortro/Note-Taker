const apiRoute = require('express').Router()
const { readFromFile, readAndAppend } = require('../helpers/fsUtils')
const uuid = require('../helpers/uuid')

//GET route for '/notes'
apiRoute.get('/notes', (req, res) => {
    console.info(`${req.method} request for notes received`)

    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
})

//POST Route for submitting '/notes'
apiRoute.post('/notes', (req, res) => {
    console.info(`${req.method} request to submit new note received`)

    const { title, text, id } = req.body

    if (title && text && id) {
        const newNote = {
            title,
            text,
            id: uuid(),
        }

        readAndAppend(newNote, './db/db.json')

        const response = {
            status: 'success',
            body: newNote,
        }

        res.json(response)
    } else {
        res.json(`Error posting note`)
    }
})

//GET route for '/notes/:id'
apiRoute.get('/notes/:id', (req, res) => {
    console.info(`${req.method} request for notes received`)

    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
})

//GET route for deleting '/notes/:id'
apiRoute.delete('/notes/:id', (req, res) => {
    console.info(`${req.method} request to delete note received`)
})

module.exports = apiRoute