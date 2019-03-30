const mongoose = require("mongoose");
const { ObjectID } = require("mongodb");

var ObjectId = mongoose.Schema.Types.ObjectId;
var groupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    trim: true
  },
  nationality: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  city: {
    type: String,
    required: true,
    trim: true
  },
  state: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    lesser: Number,
    greater: Number
  },
  diseases: [String],
  interests: [String],
  time: {
    start: Number,
    end: Number
  },
  createdBy: ObjectId,
  members: [ObjectId]
});

var Group = mongoose.model("Groups", groupSchema);

module.exports = { Group };
