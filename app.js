const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require('cors');
const postRouter = require('./routes/list_router');
const morgan = require('morgan')

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
app.use(morgan("combined"));

app.get('/', (req, res) => {
    console.log('get on /');
    console.log('req.session', req.session)
    console.log('req.user', req.user)
    res.send('got your request');
})

app.use('/list', postRouter);


app.listen(port, () => console.log(`Server up and running on port ${port}`))