const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require('cors');

const app = express()

const port = 3009

// Configure Mongo
const dbConn = process.env.MONGODB_URI || 'mongodb://localhost/teej_mern'

// Connect to Mongo with Mongoose
mongoose
    .connect(dbConn, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    },
    (err) => {
        if (err) {
            console.log("Error connecting to database", err)
        } 
        else {
            console.log("Connected to database", dbConn)
        }
    });

app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => console.log(`Server up and running on port ${port}`))