const db = require('../db');

module.exports.requireAuth = (req, res, next) => {
    const userId = req.signedCookies.userId;
    // console.log(req.cookies);
    // console.log(req.signedCookies);

    if (!userId) {
        res.redirect("/auth/login");
        return;
    }
    const user = db.get("users").find({ id: userId }).value();

    if (!user) {
        res.redirect("/auth/login");
        return;
    }

    res.locals.user = user;

    next();
}