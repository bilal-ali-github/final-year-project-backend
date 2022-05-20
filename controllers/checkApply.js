import job from "../models/job.js";

export const checkApplied = async (req, res) => {
  const freelancerId = req.params.id;
  try {
    const appliedtoJob = await job.find({
      jobApplicant: { applicantId: freelancerId },
    });
    if (appliedtoJob) res.status(200).json(appliedtoJob);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
