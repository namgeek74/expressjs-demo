const db = require('../db');

module.exports.login = (req, res) => {
    res.render('auth/login');
};

module.exports.postLogin = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const user = db.get("users").find({ email: email }).value();

    if (!user) {
        res.render("auth/login", {
            errors: [
                "User does not exist."
            ]
        });
        return;
    }

    if (user.password !== password) {
        res.render("auth/login", {
            errors: [
                "Wrong password."
            ]
        });
        return;
    }

    res.cookie("userId", user.id);
    res.redirect("/users");
}