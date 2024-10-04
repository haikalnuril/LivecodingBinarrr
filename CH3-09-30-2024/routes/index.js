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
            "status": true,
            "message": "Successfully!",
            "totalData": cars.length,
            "data": {
                cars,
            },
        });
    } catch (err) {
        res.status(500).json({
            "status": false,
            "message": "Internal server error",
            "data": {},
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
                "status": true,
                "message": "Successfully!",
                "totalData": cars.length,
                "data": {
                    cars,
                },
            });
        }
    );
});

router.get("/cars/:id", (req, res) => {
    const id = req.params.id

    const findCar = cars.find(i => i.id === id)
    
    if(!findCar){
        return res.status(404).json({
            "status": false,
            "message": `Content Not Found from ${id}`,
            "data": null,
        });
    }
    res.status(200).json({
        "status": true,
        "message": "Successfully!",
        "isSuccess": true,
        "data": {
            findCar,
        },
    });
});

router.patch("/cars/:id", (req, res) => {
    const {model, year, type} = req.body
    
    const id = req.params.id
    const findCar = cars.find(i => i.id === id)

    const cariIndex = cars.findIndex((findCar) => findCar.id === id)


    cars[cariIndex] = { ...cars[cariIndex], ...req.body}

    if(!findCar){
        return res.status(404).json({
            "status": false,
            "message": `Content Not Found from ${id}`,
            "data": null,
        });
    }

    const newFindCar = cars.find(i => i.id === id)

    fs.writeFile(
        `${PUBLIC_DIRECTORY}/data/cars.json`,
        JSON.stringify(cars),
        (err) => {
            res.status(201).json({
                "status": true,
                "message": "Successful to update your data!",
                "totalData": cars.length,
                "data": {
                    newFindCar,
                },
            });
        }
    );  
})

router.delete('/cars/:id', (req, res) => {
    const id = req.params.id;

    const findCar = cars.find(i => i.id === id)

    const cariIndex = cars.findIndex((findCar) => findCar.id === id)

    cars.splice(cariIndex, 1)

    if(!findCar){
        return res.status(404).json({
            "status": false,
            "message": `Content Not Found from ${id}`,
            "data": null,
        });
    }

    fs.writeFile(
        `${PUBLIC_DIRECTORY}/data/cars.json`,
        JSON.stringify(cars),
        (err) => {
            res.status(201).json({
                "status": true,
                "message": "Successful to delete your data!",
                "totalData": cars.length,
                "data": null,
            });
        }
    );  
})

//export router
module.exports = router;
