
 const User = require('../models/user')
 const {setUser} = require('../service/auth')
 
 async function handleSignUp(req, res) {
    const body = req.body;
    if(
        !body ||
        !body.name ||
        !body.email ||
        !body.password
    ) {
        return res.status(400).json({ msg: "All fields are required..."})
    }

    const result = await User.create({
        name: body.name,
        email: body.email,
        password: body.password
    })

    return res.status(201).redirect("/");
 }

 async function handleLogin(req,res) {
    const {email,password} = req.body;
    if(
        !email ||
        !password
    ) {
        return res.status(400).json({ msg: "All fields are required..."})
    }

    const user = await User.findOne({ email, password});
    if(!user) return res.json({ error: "Invalid Username or Password!"})
    


    const token = setUser(user);
    res.cookie('uid',token)
    return res.redirect("/dashboard");
 }

 module.exports = {
    handleSignUp,
    handleLogin
 }