const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "First name must be atleast 3 characters long"],
    },
    lastname: {
      type: String,
      minlength: [3, "Last name must be atleast 3 characters long"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlenght: [5, "Email must be atleast 5 characters long"],
  },
  password: {
    type: String,
    required: true,
    select: false,    // When we find user so password didnt go that why we use select
  },
  socketId: {
    type: String,
  },
});

userSchema.methods.gererateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {expiresIn: "24h"});
  return token;
};

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
