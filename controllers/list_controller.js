const {
    getAllItems,
    addOneItem,
    deleteOneItem
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
    // todo: Look into using update instead of save.
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

const deleteItem = function(req, res) {
    console.log("deleteItem")
	if (req.error) {
		res.status(req.error.status)
		res.send(req.error.message)
	} else {
		// execute the query from deletePost
		deleteOneItem(req.params.id).exec(err => {
			if (err) {
				res.status(500)
				res.json({
					error: err.message
				})
            }
            // The server successfully processed the 
            // request, and is not returning any content.
			res.sendStatus(204)
		})
	}
}

module.exports = {
    getItems, 
    addItem,
    deleteItem
}