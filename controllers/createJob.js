import job from "../models/job.js";

export const createJob = async (req, res) => {
  const { userId, jobDescription, jobCategory, jobSkills, jobBudget } =
    req.body;
  try {
    const result = await job.create({
      userId,
      jobDescription,
      jobCategory,
      jobSkills,
      jobBudget,
    });
    res.status(201).json(result);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
