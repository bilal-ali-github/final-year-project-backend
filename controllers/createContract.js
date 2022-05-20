import contract from "../models/contract.js";
import job from "../models/job.js";

export const createContract = async (req, res) => {
  const {
    clientId,
    freelancerId,
    contractDescription,
    contractBudget,
    contractDate,
    jobId,
  } = req.body;
  try {
    const result = await contract.create({
      clientId,
      freelancerId,
      contractDescription,
      contractBudget,
      contractDate,
    });
    const deletepost = await job.remove({ _id: jobId });
    res.status(201).json(result, deletepost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
