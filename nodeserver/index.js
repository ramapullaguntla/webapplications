const dotenvconfig = require('dotenv');
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const movieRouter = require('./routes/movie-router')
const userRouter = require('./routes/user-router')
const app = express()

dotenvconfig.config({path: '.env'})
const apiPort = process.env.NODESERVER_PORT;
console.log("The api port value is ", apiPort);

const db = require('./db')

app.use(bodyParser.urlencoded({ extended: true}))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
app.get('/', (req, res) => 
{
    res.send("Welcome");
});

app.use('/api', movieRouter);
app.use('/api/user', userRouter);

app.listen(apiPort, () => console.log("Node Server running on port ", apiPort));



