const mongoose = require("mongoose");

const JobPostSchema = new mongoose.Schema({
  createdBy: {
    type: String,
    ref: 'User',
    required: true
  },
  company_name: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    required: true,
    type: String,
    trim: true,
  },
  desc: {
    required: true,
    type: String,
    trim: true,
  },
  skillsRequired: [
    {
      type: String,
      trim: true,
      required: true,
    },
  ],
  experienceRequired: {
    type: String,
    trim: true,
    required: true,
  },
  questionary: [
    {
      que: {
        type: String,
        trim: true,
      },
      ans: {
        type: String,
        trim: true,
      },
    },
  ],
  applicationDeadline: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model("JobPosts", JobPostSchema);
