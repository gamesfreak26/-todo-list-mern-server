const {
    getAllItems,
    addOneItem
} = require("../utils/list_utilities")


// get all posts
// return a query
const getItems = function(req, res) {
    getAllItems()
        .exec((err, list) => {
            console.log("Error, list", err, list)
            if(err) {
                res.status(500)
                // Can return the line below
                res.json({
                    error: err.message
                })
            }
            else {
                res.send(list)
            }
        })
}

const addItem = function(req, res) {
    addOneItem(req.body).save((err, listItem) => {
        if (err) {
            res.status(500)
            res.json({
                error: err.message
            })
        }
        else {
            res.status(201)
            res.send(listItem)
        }
    })
}

module.exports = {
    getItems, 
    addItem
}