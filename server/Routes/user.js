const express = require("express");
const router = express.Router();

const { login, signup, sendotp, updateProfile } = require("../Controllers/loginSignup");

const { auth } = require("../Middleware/auth");

router.post("/login", login);
router.post("/signup", signup);
router.post("/sendotp", sendotp);
router.post("/updateProfile", updateProfile);

module.exports = router;
