// const jwt = require("jsonwebtoken");
import jwt from "jsonwebtoken";

const generateJWT = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, //set MS
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    // sameSite: strict,
  });
};

export default generateJWT;
