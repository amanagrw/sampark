const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

let userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    trim: true
  },
  email: {
    type: String,
    lowercase: true
  },
  mobile: {
    type: String,
    lowercase: true,
    required: true
  },
  password: {
    type: String
  },
  age: {
    type: Number,
    required: true
  },
  city: {
    type: String,
    required: true,
    trim: true
  },
  diseases: [String],
  interests: [String],
  image: String,
  state: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    trim: true
  },
  nationality: String
});

userSchema.pre("save", async function(next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(this.password, salt);
    this.password = passwordHash;
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.isValidPassword = async function(newPassword) {
  try {
    return await bcrypt.compare(newPassword, this.password);
  } catch (error) {
    throw new Error(error);
  }
};

var User = mongoose.model("Users", userSchema);

module.exports = { User };
