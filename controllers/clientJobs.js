import job from "../models/job.js";

export const getClientJobs = async (req, res) => {
  try {
    const id = req.params.id;
    const clientJobs = await job.find({ userId: `${id}` });
    res.status(200).json(clientJobs);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
