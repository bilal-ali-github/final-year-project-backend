import express from "express";
import {
  signup,
  signin,
  checkProfile,
  updateProfile,
} from "../controllers/users.js";
import {
  createPersonalInfo,
  createEducationInfo,
  createSkillInfo,
  createTitleInfo,
  createBankInfo,
} from "../controllers/infoCreate.js";
import auth from "../middleware/auth.js";
import {
  getClientProfile,
  getFreelancerProfile,
} from "../controllers/infoGet.js";
import { createJob } from "../controllers/createJob.js";
import { getClientJobs } from "../controllers/clientJobs.js";
import { getAllJobs } from "../controllers/allJobs.js";
import { applyToJob } from "../controllers/applyJob.js";
import { checkApplied } from "../controllers/checkApply.js";
import { getfreelancersApplications } from "../controllers/applicants.js";
import { createContract } from "../controllers/createContract.js";
import {
  getContractsClient,
  getContractsFreelancer,
} from "../controllers/getContracts.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);

router.get("/check-profile/:userId", checkProfile);
router.post("/update-profile", updateProfile);

router.post("/create-info-personal", createPersonalInfo);
router.post("/create-info-education", createEducationInfo);
router.post("/create-info-skill", createSkillInfo);
router.post("/create-info-title", createTitleInfo);
router.post("/create-info-bank", createBankInfo);
router.post("/create-job", createJob);
router.post("/apply-to-job", applyToJob);
router.post("/create-contract", createContract);

router.get("/freelancer/:id", getFreelancerProfile);
router.get("/client/:id", getClientProfile);
router.get("/get-client-jobs/:id", getClientJobs);
router.get("/get-all-jobs", getAllJobs);
router.get("/check-applied/:id", checkApplied);
router.get("/freelancers-applied/:id", getfreelancersApplications);
router.get("/get-contracts-client/:id", getContractsClient);
router.get("/get-contracts-freelancer/:id", getContractsFreelancer);

router.post("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome");
});

export default router;
