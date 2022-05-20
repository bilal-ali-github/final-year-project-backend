import job from "../models/job.js";

export const getfreelancersApplications = async (req, res) => {
  const id = req.params.id;
  try {
    const applicants = await job.aggregate([
      { $match: { userId: id } },
      {
        $unwind: {
          path: "$jobApplicants",
        },
      },
      {
        $lookup: {
          from: "infopersonals",
          localField: "jobApplicants.applicantId",
          foreignField: "userId",
          as: "applicantsInfo",
        },
      },
      {
        $unwind: "$applicantsInfo",
      },
    ]);
    res.status(200).json(applicants);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
