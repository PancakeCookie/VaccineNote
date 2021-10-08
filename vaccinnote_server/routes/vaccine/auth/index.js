var express = require("express");
var router = express.Router();
var authController = require("../../../controllers/vaccine/authController");

router.post("/signup", authController.signUp);
router.post("/signin", authController.signIn);

module.exports = router;
