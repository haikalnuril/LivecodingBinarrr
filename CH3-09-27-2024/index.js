const fs = require('fs');

// const text = fs.readFileSync("./index.txt", "utf-8")

// const loveFeedBack = "Aku cinta Kamu"
// const write = fs.writeFileSync("./index.txt", loveFeedBack)

// const readNew = fs.readFileSync("./index.txt", "utf-8")

// fs.mkdir("txt", () => {})

// console.log(readNew)

// asynchronous file/write
// const read = fs.readFile("./index.txt", "utf-8", (err, data) => {
//     console.log(data)
// })

const fsSync = require('fs').promises;

async function readMassage(){
    try{
        const read = await fsSync.readFile("./index.txt", "utf-8") 
        console.log(read)
    } catch(error){
        console.log(error)
    }
}

readMassage()




// console.log(read)