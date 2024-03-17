const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema({
  fname: {
    type: String,
    trim: true,
    required: true
  },
  lname: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    trim: true,
    required: true
  },
  phone: {
    type: String,
    trim: true,
    required: true
  },
  address: {
    city: {
      type: String,
    trim: true,
    required: true
    },
    state: {
      type: String,
    trim: true,
    required: true
    },
    country: {
      type: String,
      trim: true,
      required: true
    },
  },
  resume: {
    type: String,
    trim: true,
    required: true
  },
  coverPage: {
    type: String,
    trim: true
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
});

module.exports = mongoose.model("Application", ApplicationSchema);
