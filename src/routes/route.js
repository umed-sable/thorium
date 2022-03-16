

const express = require('express');
const router = express.Router();
const midW = require("../Middleware/Auth")

const authorController= require("../controllers/authorController")
const blogController = require("../controllers/blogController")


router.post("/createAuthor", authorController.createAuthor)
router.post("/createBlog",midW.verifyUser,blogController.createBlog)

router.get("/avilableBlogs/:userId",midW.verifyUser,blogController.getBlogs)
router.put("/updateBog/:blogId",midW.authorization, blogController.updateBlogs)

router.delete("/deleteBlog/:blogId",midW.authorization,blogController.deleteById)
router.delete("/deleteByParams",midW.verifyUser,blogController.deleteByParams)

router.post("/loginAuthor",authorController.loginAuthor)

module.exports = router;