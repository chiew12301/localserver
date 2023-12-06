const express = require('express');
const app = express()
const router = express.Router();

const port = 3000
const ip = "127.0.0.1"

app.use(require('express-status-monitor')())
app.use(express.static(__dirname + '/public'))

router.get("/", (req, res, next) => {
    res.send(404).send("The product cannot be found");
    console.log("home?")

  });

router.get("/testing.json", (req, res, next) => {
    res.send(200).send("You are in the api");   
    console.log("you are in api")
});

app.use((req, res, next) => {
    res.on("finish", function() {
      console.log(res.statusCode + " aaa"); // actual 404
    });
  
    console.log(res.statusCode + " here"); // 200 :/ so dont use
    next();
  });

app.listen(port, () =>{
    console.log(`Server is running - port:${port}`)
})