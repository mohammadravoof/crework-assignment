const jwt = require('jsonwebtoken')
const jwtSecret = process.env.JWT_SECRET;

function setUser(user) {
    return jwt.sign({
        _id: user._id,
        email: user.email,
    }, jwtSecret)
}

function getUser(token) {
    if(!token) return null;
    try {
        return jwt.verify(token, jwtSecret);
    } catch (error) {
        return null;
    }
}

module.exports = {
    setUser,
    getUser
}