// import { User } from "../models/userSchema";

import User from "../models/userSchema.js";
import bcrypt from "bcryptjs";

import generateJWT from "../utils/generateJWT.js";

export const signin = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    //compare passwords

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords not matching!" });
    }

    // check is username is taken or not

    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "Username is already taken!" });
    }

    // hash password

    const hashedPssw = await bcrypt.hash(password, 10);

    // set avatars
    const boyStandartAvatar = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlStandartAvatar = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    // create new user

    const newUser = new User({
      fullName,
      username,
      password: hashedPssw,
      gender,
      profilePic: gender === "girl" ? girlStandartAvatar : boyStandartAvatar,
    });

    // save new user to db

    if (newUser) {
      await newUser.save();

      generateJWT(newUser._id, res);

      res.status(201).json({
        _id: newUser.id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "Incorrect some user data!" });
    }
  } catch (error) {
    console.log("error in signup controller: ", error.message);
    res.status(500).json("Internal Server Error");
  }
};

export const login = async (req, res) => {
  try {
    // console.log("================ new login! =====================");
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    const comparePssw = await bcrypt.compare(password, user?.password || "");

    if (!user || !comparePssw) {
      return res.status(400).json({ error: "Invalid credentials!" });
    }

    generateJWT(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("error in login controller: ", error.message);
    res.status(500).json("Internal Server Error");
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json("loggedout successfully!");
  } catch (error) {
    console.log("error in logout controller: ", error.message);
    res.status(500).json("Internal Server Error");
  }
};
