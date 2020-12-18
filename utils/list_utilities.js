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

const deleteOneItem = function(id) {
    console.log(`Deleting item with id: ${id}`)
    return Item.findByIdAndDelete(id)
}

const editOneItem = function(itemId, update) {
    return Item.findOneAndUpdate({_id: itemId}, 
        { $set: update }, 
        { upsert: true }, 
        (error, doc) => {
            if (error) {
                console.log("ERROR: ", error)
            }
    })
    // .populate()
}

module.exports = {
    getAllItems,
    addOneItem,
    deleteOneItem,
    editOneItem
}