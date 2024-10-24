const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

// Admin
router.get("/", adminController.userPage);
router.get("/create", adminController.createPage);
router.post("/create", adminController.createUser);

module.exports = router;
