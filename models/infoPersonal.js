import mongoose from "mongoose";

const infoPersonalSchema = new mongoose.Schema({
  userId: { type: String, default: null },
  profilePicture: { type: String, default: null },
  province: { type: String, default: null },
  city: { type: String, default: null },
  phone: { type: String, default: null },
  address: { type: String, default: null },
});

export default mongoose.model("infoPersonal", infoPersonalSchema);
