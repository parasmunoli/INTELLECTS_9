const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
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
  education: {
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
  skills: [{
    type: String,
    trim: true
  }]
});

module.exports = mongoose.model("Profile", profileSchema);
