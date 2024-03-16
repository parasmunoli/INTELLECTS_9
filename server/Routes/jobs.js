const express = require("express");
const router = express.Router();

const {createJobPost, getAllJobPosts, getJobByID} = require('../Controllers/jobs');

router.post('/create', createJobPost);
router.get('/all', getAllJobPosts);
router.get('/jobID', getJobByID);

module.exports = router;