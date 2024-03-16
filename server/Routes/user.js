const express = require("express");
const router = express.Router();

const { login, signup, sendotp } = require("../controllers/loginSignup");

const { auth } = require("../middleware/auth");

router.post("/login", login);
router.post("/signup", signup);
router.post("/sendotp", sendotp);
router.post("/profileUpdate")

module.exports = router;
