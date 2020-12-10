const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const TodoListItem = new Schema({
    label: {
        String,
        required: true
    },
    username: {
        String,
        required: true
    },
    completed: {
        Boolean,
        required: true
    }
})

module.exports = mongoose.model("TodoListItem", TodoListItem);