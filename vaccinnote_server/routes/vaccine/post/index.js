var express = require("express");
var router = express.Router();
var postController = require("../../../controllers/vaccine/postController");
const authModule = require("../../../modules/authModule");

router.post("/upload", authModule.loggedIn, postController.uploadPost);
module.exports = router;
