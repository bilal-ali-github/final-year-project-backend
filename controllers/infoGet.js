import infoPersonal from "../models/infoPersonal.js";

export const getFreelancerProfile = async (req, res) => {
  const userId = req.params.id;
  try {
    const personalInfo = await infoPersonal.aggregate([
      { $match: { userId: userId } },
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
          "user.password": 0,
        },
      },

      {
        $unwind: "$user",
      },
      {
        $lookup: {
          from: "infoeducations",
          localField: "userId",
          foreignField: "userId",
          as: "educationInfo",
        },
      },
      {
        $unwind: "$educationInfo",
      },
      {
        $project: {
          __v: 0,
          "educationInfo._v": 0,
          "educationInfo._id": 0,
          "educationInfo.userId": 0,
        },
      },
      {
        $lookup: {
          from: "infoskills",
          localField: "userId",
          foreignField: "userId",
          as: "skillInfo",
        },
      },
      {
        $unwind: "$skillInfo",
      },
      {
        $project: {
          __v: 0,
          "skillInfo._v": 0,
          "skillInfo._id": 0,
          "skillInfo.userId": 0,
        },
      },
      {
        $lookup: {
          from: "infotitles",
          localField: "userId",
          foreignField: "userId",
          as: "titleInfo",
        },
      },
      {
        $unwind: "$titleInfo",
      },
      {
        $project: {
          __v: 0,
          "titleInfo._v": 0,
          "titleInfo._id": 0,
          "titleInfo.userId": 0,
        },
      },
    ]);
    res.status(200).json(personalInfo);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const getClientProfile = async (req, res) => {
  const userId = req.params.id;
  try {
    const personalInfo = await infoPersonal.aggregate([
      { $match: { userId: userId } },
      {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "userId",
          as: "user",
        },
      },
      {
        $unwind: "$user",
      },
      {
        $project: {
          __v: 0,
          "user._id": 0,
          "user.userId": 0,
          "user.password": 0,
          "user.email": 0,
        },
      },
    ]);
    res.status(200).json(personalInfo);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
