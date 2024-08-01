
 const bcrypt = require('bcrypt')
 const User = require('../models/user')
 const {setUser} = require('../service/auth')
 
 async function handleSignUp(req, res) {
    try {
        const body = req.body;
    if(
        !body ||
        !body.name ||
        !body.email ||
        !body.password
    ) {
        return res.status(400).json({ msg: "All fields are required..."})
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(body.password, saltRounds);

    const result = await User.create({
        name: body.name,
        email: body.email,
        password: hashedPassword
    })

    return res.status(200).redirect("/");
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
    
 }

 async function handleLogin(req,res) {
    try {
        const {email,password} = req.body;
        if(
            !email ||
            !password
        ) {
            return res.status(400).json({ msg: "All fields are required..."})
        }
    
        const user = await User.findOne({ email });
        if(!user) return res.json({ error: "Invalid Credentials!"})
    
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return res.status(401).json({ error: 'Invalid Username or Password!' });
        }
        console.log(`${user}`)
        const token = setUser(user);
        console.log(token)
        res.cookie('uid',token)
        return res.redirect("/dashboard");  
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
    
 }

 module.exports = {
    handleSignUp,
    handleLogin
 }