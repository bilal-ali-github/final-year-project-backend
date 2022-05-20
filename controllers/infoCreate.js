import infoPersonal from "../models/infoPersonal.js";
import infoEducation from "../models/infoEducation.js";
import infoTitle from "../models/infoTitle.js";
import infoSkill from "../models/infoSkill.js";
import infoBank from "../models/infoBank.js";

export const createPersonalInfo = async (req, res) => {
  const { userId, profilePicture, province, city, phone, address } = req.body;
  try {
    const result = await infoPersonal.create({
      userId,
      profilePicture,
      province,
      city,
      phone,
      address,
    });
    res.status(201).json(result);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const createEducationInfo = async (req, res) => {
  const {
    userId,
    institution,
    institutionType,
    degree,
    majors,
    startDate,
    endDate,
    description,
  } = req.body;
  try {
    const result = await infoEducation.create({
      userId,
      institution,
      institutionType,
      degree,
      majors,
      startDate,
      endDate,
      description,
    });
    res.status(201).json(result);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const createSkillInfo = async (req, res) => {
  const { userId, category, skills } = req.body;
  try {
    const result = await infoSkill.create({
      userId,
      category,
      skills,
    });
    res.status(201).json(result);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const createTitleInfo = async (req, res) => {
  const { userId, availabilty, hourlyRate, title, profileDescription } =
    req.body;
  try {
    const result = await infoTitle.create({
      userId,
      availabilty,
      hourlyRate,
      title,
      profileDescription,
    });
    res.status(201).json(result);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const createBankInfo = async (req, res) => {
  const {
    userId,
    accountTitle,
    accountNumber,
    accountIBAN,
    creditCardNumber,
    creditCardCode,
    CardValidFrom,
    CardValidThru,
  } = req.body;

  try {
    const result = await infoBank.create({
      userId,
      accountTitle,
      accountNumber,
      accountIBAN,
      creditCardNumber,
      creditCardCode,
      CardValidFrom,
      CardValidThru,
    });
    res.status(201).json(result);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
