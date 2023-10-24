const express = require("express");
var bodyParser = require('body-parser');

const app = express();
const port = 3000;

// body parser
app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.send("hello world");
  console.log("hello world");
});


app.listen(port, () => console.log("hello from server port 3000"));



