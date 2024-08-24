const express = require('express');
const { handleSignUp,handleLogin } = require('../controllers/user');
const { restrictToLoggedinUserOnly } = require('../middlewares/auth');

const router = express.Router()

router.post("/signup", handleSignUp)
router.post("/", handleLogin)
router.get("/dashboard", restrictToLoggedinUserOnly ,async (req, res) => res.json({message: "At dashboard"}))


module.exports = router;
 