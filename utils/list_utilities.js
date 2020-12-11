const Item = require("../models/Item")

// get all items
// return a query
const getAllItems  = function() {
    return Item.find();
}

// POST
const addOneItem = function(item) {
    console.log(item)
    return new Item(item)
}

module.exports = {
    getAllItems,
    addOneItem
}