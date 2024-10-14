const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

// Admin
router.get("/", adminController.userPage);

module.exports = router;
