import mongoose from "mongoose";

const infoSkillSchema = new mongoose.Schema({
  userId: { type: String, default: null },
  category: { type: String, default: null },
  skills: { type: [String], default: null },
});

export default mongoose.model("infoSkill", infoSkillSchema);
