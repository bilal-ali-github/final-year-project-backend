import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  userId: { type: String },
  jobDescription: { type: String, default: null },
  jobCategory: { type: String, default: null },
  jobSkills: { type: Array, default: null },
  jobBudget: { type: Number, default: 0 },
  jobApplicants: [
    {
      applicantId: { type: String, default: null },
      applicantMessage: { type: String, default: null },
      applicantBudget: { type: String, default: null },
    },
  ],
});

export default mongoose.model("job", jobSchema);
