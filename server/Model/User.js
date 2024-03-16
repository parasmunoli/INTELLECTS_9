const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  middleName: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  pendingPosts: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "JobPosts",
    },
  ],
  additionalDetails: {
    type: mongoose.Schema.ObjectId,
    ref: 'Profile',
    default: null
  },
  phone: {
    type: Number,
    trim: true,
    required: true,
  },
  token: {
    type: String,
  },
  resetPasswordExpires: {
    type: Date,
  },
  appliedJobs: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'JobPost'
    }
  ]
});

module.exports = mongoose.model("User", userSchema)