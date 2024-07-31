require('dotenv').config();
const express = require('express')
const cookieParser = require('cookie-parser')
const { connectMongoDb } = require("./connection.js")
const { logReqRes } = require('./middlewares')
const userRoute = require('./routes/user.js')
const taskRoute = require('./routes/task.js')

const app = express()
const port = 3000

// Load environment variables
const mongodbUrl = process.env.MONGODB_URL;

// Connection
connectMongoDb(mongodbUrl);

//Middleware - Plugin
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(logReqRes('log.txt'));

// Routes
app.use('/', userRoute)
app.use('/', taskRoute)

app.listen(port, () => console.log(`Server is running on port ${port}`))