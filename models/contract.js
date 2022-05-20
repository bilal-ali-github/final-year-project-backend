import mongoose from "mongoose";

const contractSchema = new mongoose.Schema({
  clientId: { type: String },
  freelancerId: { type: String },
  contractDescription: { type: String },
  contractBudget: { type: Number },
  contractDate: { type: String },
  Status: { type: String, default: "Pending" },
});

export default mongoose.model("contract", contractSchema);
