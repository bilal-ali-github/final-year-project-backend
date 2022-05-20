import job from "../models/job.js";

export const applyToJob = async (req, res) => {
  const { jobId, applicantId, coverLetter, offerBudget } = req.body;
  try {
    const applicationStatus = await job
      .updateOne(
        { _id: jobId },
        {
          $push: {
            jobApplicants: {
              applicantId: applicantId,
              applicantMessage: coverLetter,
              applicantBudget: offerBudget,
            },
          },
        },
        { new: true, upsert: true }
      )
      .exec();
    res.status(200).json(applicationStatus);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
