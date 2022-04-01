const db = require('../db');

module.exports.requireAuth = (req, res, next) => {
    const userId = req.cookies.userId;
    if (!userId) {
        res.redirect("/auth/login");
        return;
    }
    const user = db.get("users").find({ id: userId }).value();

    if (!user) {
        res.redirect("/auth/login");
        return;
    }

    next();
}