import job from "../models/job.js";

export const getAllJobs = async (req, res) => {
  try {
    const allJobs = await job.aggregate([
      {
        $lookup: {
          from: "infopersonals",
          localField: "userId",
          foreignField: "userId",
          as: "personalInfo",
        },
      },
      {
        $project: {
          __v: 0,
          "personalInfo._id": 0,
          "personalInfo.province": 0,
          "personalInfo.address": 0,
          "personalInfo.phone": 0,
        },
      },
      {
        $unwind: "$personalInfo",
      },
      {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "userId",
          as: "user",
        },
      },
      {
        $project: {
          __v: 0,
          "user._id": 0,
          "user.userId": 0,
          "user.email": 0,
          "user.password": 0,
        },
      },
      {
        $unwind: "$user",
      },
    ]);
    res.status(200).json(allJobs);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
