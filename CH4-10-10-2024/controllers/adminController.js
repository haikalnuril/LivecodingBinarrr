const { User } = require("../models");

async function userPage(req, res) {
    try {
        const users = await User.findAll();
        res.render("index", {
            title: "Dashboard Admin",
            subTitle: "Welcome to Admin Dashboard",
            users,
        });
    } catch (error) {
        res.render("error"), {
            message: error.message
        }
    }
}

module.exports = { userPage };