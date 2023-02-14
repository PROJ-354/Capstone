import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const login = async (req, res, next) => {
  try {
    console.log(req.body); // checking to see if req body is null
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email: email });
    if (!existingUser) {
      res.status(500).json("User does not exist");
    }
    const isPasswordValid = bcrypt.compare(password, existingUser.password);
    if (!isPasswordValid) {
      res.status(500).json("password is not valid");
    }
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },

      process.env.SECRET,
      { expiresIn: "5h" }
    );
    res.status(200).json({ result: existingUser, token: token });
  } catch (error) {
    next(error);
  }
};

export const register = async (req, res, next) => {
  try {
    const {
      role,
      sait_id,
      firstName,
      lastName,
      secretCode,
      email,
      password,
      confirmPassword,
    } = req.body;

    const existingUser = await User.findOne({
      email: email,
    });
    if (existingUser) {
      res.status(500).json("User already exists");
    }
    if (password !== confirmPassword) {
      res.status(500).json("passwords do not match");
    }

    //code for validating access code for students and preceptors here

    const hashedPassword = await bcrypt.hash(password, 12);

    const userProfile = await User.create({
      role: role,
      sait_id: role !== "preceptor" ? sait_id : "not assigned",
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashedPassword,
    });

    const token = jwt.sign(
      { email: email, id: userProfile._id },
      process.env.SECRET,
      { expiresIn: "5h" }
    );
    res.status(200).json({ resutl: userProfile, token: token });
  } catch (error) {
    next(error);
  }
};
