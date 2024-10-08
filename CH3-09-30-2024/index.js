const express = require("express");
const router = require("./routes");
const productRouter = require('./routes/productRouter')

const app = express();
const port = 3000;

//use body parser
app.use(express.urlencoded({ extended: true }));

// parse application/json
app.use(express.json())

//default URL = URL health check
app.get('/health-check', (req, res) => {
    res.status(200).json({
        "status": true,
        "message": "Ping Successfully!",
        "data": []
    })
})

app.get('/', async (req, res) => {
    try{
        res.status(200).json({
            "status": true,
            "message": "Ping Successfully!",
            "data": []
        })
    } catch (err) {
        res.status(404).json({
            "status": false,
            "message": "URL Not Found",
            "data" : []
        })
    }
})

//define routes
app.use('/api/v1', router);
app.use('/api/v2/products', productRouter)

//middleware for url not found
app.use((req, res, next) => {
    res.status(404).json({
        "status": false,
        "message": "URL Not Found",
        "data": []
    });
});

app.listen(port, () => {
    const url = `http://localhost:${port}`;
    console.log(`Click to open:`, url);
});
