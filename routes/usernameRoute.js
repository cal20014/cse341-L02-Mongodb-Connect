const router = require("express").Router();
const usernameController = require("../controllers/userController.js");

// User route
router.get("/", userController.getUser);

// username route
router.get("/username", userController.getUsername);

module.exports = router;
