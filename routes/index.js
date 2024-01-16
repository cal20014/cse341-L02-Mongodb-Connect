const router = require("express").Router();
const userRoute = require("./userRoute.js");

// Routes
router.use("/", userRoute);

module.exports = router;
