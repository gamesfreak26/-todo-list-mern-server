const mongoose = require('mongoose');

// set up connection for test database
const dbConn = 'mongodb://localhost/teej_mern_test'

const connectToDb = function (done) {
    // Connect to database
    mongoose.connect(dbConn, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        // userCreateIndex: true
    },
    (err) => {
        if (err) {
            console.log('Error connecting to database', err);
        } else {
            console.log('Connected to database!');
        }
        done();
    });
};

const disconnectFromDb = function (done) {
    mongoose.disconnect(() => done())
};

module.exports = {
    connectToDb,
    disconnectFromDb
};