const express = require("express")
const router = express.Router()

const {
    getItems,
    addItem
} = require("../controllers/list_controller")

// READ
// GET on '/'
// Returns all posts
router.get("/", getItems)

router.post("/", addItem)

module.exports = router