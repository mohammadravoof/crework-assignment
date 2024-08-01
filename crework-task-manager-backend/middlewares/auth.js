const { getUser } = require("../service/auth");

async function restrictToLoggedinUserOnly(req, res, next) {

    const userUid = req.cookies?.uid;
    
    console.log(userUid);
    if(!userUid) return res.json({error:"no cookies"})


    const user = getUser(userUid);
    if(!user) return res.json({error:"cookies changed"})

    req.userId = user._id;
    next();

}

module.exports = {
    restrictToLoggedinUserOnly,
}