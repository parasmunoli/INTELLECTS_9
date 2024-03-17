const express = require("express");
const router = express.Router();

const { login, signup, sendotp, updateUser } = require("../Controllers/loginSignup");

const { auth } = require("../Middleware/auth");

router.post("/login", login);
router.post("/signup", signup);
router.post("/sendotp", sendotp);
router.post("/updateUser", updateUser);

module.exports = router;
