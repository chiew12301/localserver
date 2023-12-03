const express = require('express');
const app = express()

const port = 3000
const ip = "127.0.0.1"

app.use(require('express-status-monitor')())
app.use(express.static(__dirname + '/public'))

app.listen(port, () =>{
    console.log(`Server is running - port:${port}`)
})