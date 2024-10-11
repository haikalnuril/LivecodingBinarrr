const express = require("express");
const router = express.Router();
const carController = require("../controllers/carController");

// Cars API
router.post("/", carController.createCar);
router.get("/", carController.getAllCars);
router.get("/:id", carController.getCarById);
router.delete("/:id", carController.deleteCarById);
router.patch("/:id", carController.updateCar);

module.exports = router;
