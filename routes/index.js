 const index = require('express').Router()
 const noteRoute = require('./apiRoute')

 index.use(noteRoute)

 module.exports = index