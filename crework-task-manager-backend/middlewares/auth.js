const { getUser } = require("../service/auth");

async function restrictToLoggedinUserOnly(req, res, next) {
    const userUid = req.cookies?.uid;

    if(!userUid) return res.redirect('/login');

    const user = getUser(userUid);
    if(!user) return res.redirect("/login");

    req.userId = user._id;
    next();

}

module.exports = {
    restrictToLoggedinUserOnly,
}