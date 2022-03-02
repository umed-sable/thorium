
const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController.js")
const bookController= require("../controllers/bookController.js")
const publisherController = require("../controllers/publisherController.js")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

// router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/getBooks", bookController.getBooks)

// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

router.post("/createPublisher", publisherController.createPublisher)

// router.get("/getPublisherData", publisherController.getPublisherData )


module.exports = router;