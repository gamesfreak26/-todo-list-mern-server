const express = require("express")
const router = express.Router()

const {
    getItems,
    addItem,
    deleteItem,
    editItem
} = require("../controllers/list_controller")

// READ
// GET on '/'
// Returns all posts
router.get("/", getItems)

router.post("/", addItem)

router.delete("/:id", deleteItem)

router.put("/:id", editItem)

module.exports = router