import mongoose from "mongoose";

const infoBankSchema = new mongoose.Schema({
  userId: { type: String },
  accountTitle: { type: String, default: null },
  accountNumber: { type: String, default: null },
  accountIBAN: { type: String, default: null },
  creditCardNumber: { type: String, default: null },
  creditCardCode: { type: String, default: null },
  creditCardValidFrom: { type: String, default: null },
  creditCardValidThru: { type: String, default: null },
});

export default mongoose.model("infoBank", infoBankSchema);
