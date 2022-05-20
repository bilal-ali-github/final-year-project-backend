import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { v4 as uuid } from "uuid";
import user from "../models/user.js";

import userModel from "../models/user.js";

const secret = "test";

export const signup = async (req, res) => {
  const { firstName, lastName, email, password, joinAs } = req.body;
  try {
    const oldUser = await userModel.findOne({ email });
    if (oldUser)
      return res.status(400).json({ message: "User Already Exists" });

    const Id = uuid();
    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await userModel.create({
      userId: Id,
      email,
      password: hashedPassword,
      firstName,
      lastName,
      joinAs,
    });
    const token = jwt.sign({ email: result.email, id: result.userId }, secret, {
      expiresIn: "1h",
    });
    res.status(201);
  } catch (error) {
    res.status(500).json({ message: "Something Went Wrong..." });
    console.log(error);
  }
};

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await userModel.findOne({ email });

    if (!oldUser)
      return res.status(404).json({ message: "user Doesn't Exsist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid Username or Password" });

    const token = jwt.sign(
      { email: oldUser.email, id: oldUser.userId },
      secret,
      {
        expiresIn: "1hr",
      }
    );

    res
      .status(200)
      .json({ userId: oldUser.userId, joinAs: oldUser.joinAs, token });
  } catch (error) {
    res.status(500).json({ message: "Something Went Wrong..." });
    console.log(error);
  }
};

export const checkProfile = async (req, res) => {
  const userId = req.params.userId;
  try {
    const profileStatus = await user.find(
      { userId: userId },
      {
        _id: 0,
        userId: 0,
        firstName: 0,
        lastName: 0,
        email: 0,
        password: 0,
        joinAs: 0,
      }
    );
    res.status(200).json(profileStatus);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateProfile = async (req, res) => {
  const { userId, status } = req.body;
  try {
    const updatedStatus = await user.findOneAndUpdate(
      { userId: userId },
      { profileCreated: status }
    );
    res.status(200).json(updatedStatus);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
