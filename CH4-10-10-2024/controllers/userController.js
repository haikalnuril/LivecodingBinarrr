const { User } = require("../models");

const imagekit = require("../lib/imagekit");

// Function for get all user data
async function getAllUser(req, res) {
    try {

        const users = await User.findAll();
        res.status(200).json({
            status: "Success",
            message: "Successfully obtained users data",
            isSuccess: true,
            data: { users },
        });
    } catch (error) {
        res.status(500).json({
            status: "Failed",
            message: "Failed to get users data",
            isSuccess: false,
            data: null,
            error: error.message,
        });
    }
}

// Function for get user data by id
async function getUserById(req, res) {
    const id = req.params.id;
    try {
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({
                status: "Failed",
                message: "Can't find spesific id user",
                isSuccess: false,
                data: null,
            });
        }
        res.status(200).json({
            status: "Success",
            message: "Successfully obtained user data",
            isSuccess: true,
            data: { user },
        });
    } catch (error) {
        res.status(500).json({
            status: "Failed",
            message: "Failed to get user data",
            isSuccess: false,
            data: null,
            error: error.message,
        });
    }
}

// Function for delete user by id
async function deleteUserById(req, res) {
    const id = req.params.id;
    try {
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({
                status: "Failed",
                message: "Can't find spesific id user",
                isSuccess: false,
                data: null,
            });
        }

        await user.destroy();

        res.status(200).json({
            status: "Success",
            message: "Successfully delete user data",
            isSuccess: true,
            data: { user },
        });
    } catch (error) {
        res.status(500).json({
            status: "Failed",
            message: "Failed to delete user data",
            isSuccess: false,
            data: null,
            error: error.message,
        });
    }
}

// Function for update user by id
async function UpdateUserById(req, res) {
    const { firstName, lastName, age, phoneNumber } = req.body;
    const id = req.params.id;
    try {
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({
                status: "Failed",
                message: "Can't find spesific id user",
                isSuccess: false,
                data: null,
            });
        }

        user.firstName = firstName;
        user.lastName = lastName;
        user.age = age;
        user.phoneNumber = phoneNumber;

        await user.save();

        res.status(200).json({
            status: "Success",
            message: "Successfully update user data",
            isSuccess: true,
            data: { user },
        });
    } catch (error) {
        res.status(500).json({
            status: "Failed",
            message: "Failed to update user data",
            isSuccess: false,
            data: null,
            error: error.message,
        });
    }
}

async function createUser(req, res) {
    try {
        let uploadedFiles = [];

        if (req.files && req.files.length > 0) {
            for (let file of req.files) {
                const split = file.originalname.split(".")
                // imam.pdf = ['imam', 'pdf'] = length 2 
                const ext = split[split.length - 1]
                const filename = split[0]
                const fileBuffer = file.buffer;
                const fileName = `Profile-${filename}-${Date.now()}.${ext}`

                // Upload to ImageKit
                const uploadedFile = await imagekit.upload({
                    file: fileBuffer,
                    fileName: fileName,
                });

                uploadedFiles.push(uploadedFile.url);
            }
        }

        const newUser = req.body;

        // This one is for saving the uploaded files to the database and separate them with comma
        const photosString = uploadedFiles.length > 0 ? uploadedFiles.join(',') : null;

        const createdUser = await User.create({
            ...newUser,
            photoProfile: photosString
        });

        res.status(201).json({
            status: "Success",
            message: "Successfully added user data",
            isSuccess: true,
            data: { createdUser },
        });
    } catch (error) {
        console.error('Error in createUser:', error);
        res.status(500).json({
            status: "Failed",
            message: "Failed to add user data",
            isSuccess: false,
            data: null,
            error: error.message,
        });
    }
}

module.exports = {
    getAllUser,
    getUserById,
    deleteUserById,
    UpdateUserById,
    createUser,
};
