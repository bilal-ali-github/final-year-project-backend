import contract from "../models/contract.js";

export const getContractsClient = async (req, res) => {
  const id = req.params.id;
  try {
    const contracts = await contract.find({ clientId: id });
    res.status(200).json(contracts);
  } catch (error) {
    console.log(400);
  }
};

export const getContractsFreelancer = async (req, res) => {
  const id = req.params.id;
  try {
    const contracts = await contract.find({ freelancerId: id });
    res.status(200).json(contracts);
  } catch (error) {
    console.log(400);
  }
};
