const express = require("express");
// const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// cors
const cors = require("cors");
// bring in keys.js
const db = require("./config/keys");

const app = express();

const corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200
};

//connect to mongoose
mongoose.connect(db.mongoURI, db.mongoSetup)
    .then(() => console.log("MongoDb connected..."))
    .catch(err => console.log(err));

app.use(express.json());
app.use(cors(corsOptions));

//people api-router
const people = require("./router/people");

// use routes
app.use("/", people);

const port = process.env.PORT || 5000;

app.listen(port, (() => console.log(`server started on port ${port}`)));