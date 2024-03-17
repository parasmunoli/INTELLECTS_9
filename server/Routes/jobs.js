const express = require("express");
const router = express.Router();

const {createJobPost, getAllJobPosts, getJobByID, deleteJobPost} = require('../Controllers/jobs');

router.post('/create', createJobPost);
router.get('/all', getAllJobPosts);
router.get('/jobID', getJobByID);
router.post('/delete', deleteJobPost)

module.exports = router;