import mongoose from "mongoose";

const infoEducationSchema = new mongoose.Schema({
  userId: { type: String, default: null },
  institution: { type: String, default: null },
  institutionType: { type: String, default: null },
  degree: { type: String, default: null },
  majors: { type: String, default: null },
  startDate: { type: String, default: null },
  endDate: { type: String, default: null },
  description: { type: String, default: null },
});

export default mongoose.model("infoEducation", infoEducationSchema);
