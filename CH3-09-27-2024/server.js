const http = require("http")
const url = require("url")

// express
const app = http.createServer((req, res) => {
    console.log(req.url)
    // res.end('hello FSW 2 !!!')
    const pathUrl = req.url

    if(pathUrl === "/nuril"){
        res.end("Hai Nuril")
    } else if (pathUrl === "/") {
        res.end("Status:200\nMassage: Success\nData: welcome")
    } else {
        res.end("404 Page Not Found")
    }
})

const port = 3000;

app.listen(port, () => {
    console.log(`Server started on port localhost:${port}`)})