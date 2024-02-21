const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 4000
const crud = require('./routes/crudRoute')
const bodyParser = require('body-parser');

app.use(bodyParser.json())

mongoose.connect('mongodb://127.0.0.1:27017/project')
        .then(() => console.log("Connected to MongoDB"))
        .catch(err => console.error(err))


app.use('/api/crud',crud)

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})