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
  applications: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Application",
    },
  ],
  experiences: [
    {
      companyName: {
        type: String,
        trim: true,
      },
      role: {
        type: String,
      },
      startDate: {
        type: Date,
      },
      endDate: {
        type: Date,
      },
      additionalDesc: {
        type: String,
        trim: true,
      },
    },
  ],
  education: [
    {
      qualification: {
        type: String,
        required: true,
      },
      grade: {
        type: String,
      },
      startDate: {
        type: Date,
      },
      endDate: {
        type: Date,
      },
    },
  ],
  gender: {
    type: String,
  },
  dateOfBirth: {
    type: String,
  },
  about: {
    type: String,
    trim: true,
  },
  skills: [
    {
      type: String,
      trim: true,
    },
  ],
  about: {
    type: String,
    trim: true
  }
});

module.exports = mongoose.model("User", userSchema);
