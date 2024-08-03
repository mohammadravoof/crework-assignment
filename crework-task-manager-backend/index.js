require('dotenv').config();
const express = require('express')
const { connectMongoDb } = require("./connection.js")
const cors = require('cors')
const cookieParser = require('cookie-parser')
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
app.use(cors({
  origin: 'http://localhost:3001',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(logReqRes('log.txt'));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
  });
// Routes
app.use('/', userRoute)
app.use('/', taskRoute)



app.listen(port, () => console.log(`Server is running on port ${port}`))