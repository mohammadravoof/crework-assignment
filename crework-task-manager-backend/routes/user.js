const express = require('express');
const { handleSignUp,handleLogin } = require('../controllers/user');
const { restrictToLoggedinUserOnly } = require('../middlewares/auth');

const router = express.Router()

router.get("/dashboard", async (req, res) => res.json({message: "At dashboard"}))
router.get("/", async (req, res) => res.json({message: "Login"}))
router.post("/signup", handleSignUp)
router.post("/", handleLogin)


module.exports = router;
 