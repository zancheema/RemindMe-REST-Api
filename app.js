const mongoose = require('mongoose')
const express = require('express')
const app = express()
require('dotenv').config()

const taskRoutes = require('./routes/tasks')

// MiddleWare
app.use(express.json())
app.use('/tasks', taskRoutes)

mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log('Connected to DB!')
)

app.listen(3000)