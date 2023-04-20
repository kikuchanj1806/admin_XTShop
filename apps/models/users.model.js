const mongoose = require("mongoose");
const schema = mongoose.Schema;
const userSchema = new schema({
  username: { type: String, unique: true },
  email: { type: String },
  password: { type: String, select: true },
  firstName: { type: String },
  lastName: { type: String },
  googleId: { type: String },
  isPublic: { type: Boolean, default: true },
  createdOn: { type: Date, default: Date.now },
  updatedOn: { type: Date, default: Date.now },
});

module.exports = mongoose.model("users", userSchema);
