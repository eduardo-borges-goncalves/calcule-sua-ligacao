const express = require("express")
const path = require('path')
const app = express()
__dirname = path.resolve();

// Settings

// Static Files

app.use(express.static(path.join(__dirname, "/public")))

// Routes

app.get( "/", (req, res) => {
    res.sendFile(__dirname + "/front/index.html")
})

// Server

const PORT = 8081

app.listen(PORT, () => {
    console.log("Server is running at port 8081.")
})
