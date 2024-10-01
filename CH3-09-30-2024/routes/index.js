//import express
const express = require("express");
const fs = require("fs");
const path = require("path");
const PUBLIC_DIRECTORY = path.join(__dirname, "../");

//init express router
const router = express.Router();

const cars = JSON.parse(
    fs.readFileSync(`${PUBLIC_DIRECTORY}/data/cars.json`, "utf-8")
);

router.get("/cars", (req, res) => {
    try {
        res.status(200).json({
            status: true,
            message: "Successfully!",
            totalData: cars.length,
            data: {
                cars,
            },
        });
    } catch (err) {
        res.status(500).json({
            status: false,
            message: "Internal server error",
            data: {},
        });
    }
});

router.post("/cars", (req, res) => {
    const createCar = req.body;
    cars.push(createCar);

    fs.writeFile(
        `${PUBLIC_DIRECTORY}/data/cars.json`,
        JSON.stringify(cars),
        (err) => {
            res.status(201).json({
                status: true,
                message: "Successfully!",
                totalData: cars.length,
                data: {
                    cars,
                },
            });
        }
    );
});

//export router
module.exports = router;
