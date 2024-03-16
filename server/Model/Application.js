const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema({
  fname: {},
  lname: {},
  email: {},
  phone: {},
  address: {
    city: {},
    state: {},
    country: {},
  },
  resume: {},
  coverPage: {},
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
