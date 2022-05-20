import mongoose from "mongoose";

const infoTitleSchema = new mongoose.Schema({
  userId: { type: String, default: null },
  availability: { type: Number, default: null },
  hourlyRate: { type: Number, default: null },
  title: { type: String, default: null },
  profileDescription: { type: String, default: null },
});

export default mongoose.model("infoTitle", infoTitleSchema);
