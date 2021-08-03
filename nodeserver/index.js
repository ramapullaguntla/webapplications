const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const apiPort = 3000

const db = require('./db')

app.use(bodyParser.urlencoded({ extended: true}))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
app.get('/', (req, res) => 
{
    res.send("Welcome");
});

app.listen(apiPort, () => console.log("Node Server running on port 3000"));



