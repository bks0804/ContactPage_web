const express = require("express");
const app = express();
const PORT = 5000;
const Cors = require("cors");
const mongoose = require("mongoose");
// const { connected } = require("process");
const { mongoURL } = require("./key");
const bodyParser = require("body-parser");

// Body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database model
require("./model/ContactDetails");

//** Connect database
mongoose
  .connect(mongoURL)
  .then((res) => {
    console.log("mongodb connected");
  })
  .catch((err) => {
    console.log(err);
    console.log("mongodb not connected");
  });

//cors
app.use(Cors());

//importing routes
app.use(require("./routes/User"));

// port listen

app.listen(PORT, () => {
  console.log("Server is running on :" + PORT);
});
