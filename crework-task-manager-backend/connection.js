const mongoose = require('mongoose')

async function connectMongoDb(url) {
    return mongoose.connect(url)
                    .then(() => console.log('Connected to Database!'))
                    .catch(() => console.log('Database connection failed!'))
}

module.exports = {
    connectMongoDb
}