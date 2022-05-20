import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userId: { type: String },
  firstName: { type: String, default: null },
  lastName: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String },
  joinAs: { type: String },
  profileCreated: { type: Number, default: 0, max: 5 },
});

export default mongoose.model("user", userSchema);
