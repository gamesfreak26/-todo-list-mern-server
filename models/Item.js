const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const Item = new Schema({
    label: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model("Item", Item);