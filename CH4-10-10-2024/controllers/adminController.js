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
        res.render("error"),
            {
                message: error.message,
            };
    }
}

async function createUser(req, res) {
    const newUser = req.body;

    let uploadedImage = null;

    if (req.file) {
        const file = req.file;
        const split = file.originalname.split(".");
        const ext = split[split.length - 1];
        const filename = `Profile-${Date.now()}.${ext}`;

        try {
            uploadedImage = await imagekit.upload({
                file: file.buffer,
                fileName: filename,
            });
        } catch (uploadError) {
            console.log("Error uploading image:", uploadError);
            return res.redirect("/error");
        }
    }

    try {
        await User.create({
            ...newUser,
            photoProfile: uploadedImage ? uploadedImage.url : null,
        });

        res.redirect("/dashboard/admin/users");
    } catch (error) {
        console.log("Error creating user:", error);
        res.redirect("/error");
    }
}

async function createPage(req, res) {
    try {
        res.render("create", {
            title: "Create User",
            subTitle: "Create new user",
        });
    } catch (error) {
        res.render("error", {
            message: error.message,
        });
    }
}

module.exports = { userPage, createUser, createPage };
