const express = require("express");
const morgan = require("morgan");
const usersRoute = require("./routes/usersRoute");
const carsRoute = require("./routes/carsRoute");
const sparepartsRoute = require("./routes/sparepartsRoute");
const driverRoutes = require("./routes/driverRoute");
const adminRoutes = require("./routes/adminRoute");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = 3000;

// Reading json from body (client)
app.use(express.json());

app.use(morgan());

// Health Check
app.get("/", async (req, res) => {
    try {
        res.status(200).json({
            status: "Succeed",
            message: "Ping successfully",
            isSuccess: true,
        });
    } catch (error) {
        res.status(500).json({
            status: "Failed",
            message: "Ping failed",
            isSuccess: false,
            error: error.message,
        });
    }
});

app.use(express.static(`${__dirname}/public`));

// View Engine
app.set("view engine", "ejs");
// app.get("/dashboard/admin", async (req, res) => {
//     try {
//     const response = await fetch("http://localhost:3000/api/v1/users");
//     const users = await response.json();
//     console.log(users)
//     res.render("index", {
//         title: "Dashboard Admin",
//         subTitle: "Welcome to Admin Dashboard",
//         users: users.data.users,
//     });
//     } catch (error) {
//         console.log(error);
//     }
// });

// Admin dashboard route
app.use("/dashboard/admin", adminRoutes);

// Routes
app.use("/api/v1/users", usersRoute);
app.use("/api/v1/cars", carsRoute);
app.use("/api/v1/spareparts", sparepartsRoute);
app.use("/api/v1/drivers", driverRoutes);

// Middleware to handle page not found
app.use((req, res, next) => {
    res.status(404).json({
        status: "Failed",
        message: "API not found !",
        isSuccess: false,
    });
});

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});
