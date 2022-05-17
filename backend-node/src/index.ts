import express from 'express'

const app = express()

const url = 'mongodb://127.0.0.1:27017'

const mongoose = require('mongoose')

mongoose.connect(url)

const laptopRouter = require('../routes/laptops')

const db = mongoose.connection

db.on('error', (error:any) => console.error(error))
db.once('open', () => console.log('Connected to database'))

app.use(express.json())


app.use('/laptops', laptopRouter)

app.listen(3001, () => {
  console.log("Server started")
})

