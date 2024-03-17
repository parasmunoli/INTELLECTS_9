const express = require("express");
const router = express.Router();

const { submitApplication, deleteApplication } = require("../Controllers/application");

router.post('/submit', submitApplication);
router.post('/delete', deleteApplication);

module.exports = router;