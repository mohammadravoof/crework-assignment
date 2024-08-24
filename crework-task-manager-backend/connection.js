const mongoose = require('mongoose')

async function connectMongoDb() {
    return mongoose.connect(process.env.MONGODB_URL)
                    .then(() => console.log('Connected to Database!'))
                    .catch(() => console.log('Database connection error'))
}

module.exports = { connectMongoDb }