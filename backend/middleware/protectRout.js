import jwt from "jsonwebtoken";
import User from "../models/userSchema.js";

export const protectRoute = async (req, res, next) => {
  // Add `next` as an argument
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorized - No Token Provided!" });
    }

    const decaded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decaded) {
      return res
        .status(401)
        .json({ error: "Unauthorized - No Invalid Token!" });
    }

    const user = await User.findById(decaded.userId);

    if (!user) {
      return res.status(404).json({ error: "User not found!" });
    }

    req.user = user;
    next(); // Call `next` to pass control to the next middleware function
  } catch (error) {
    console.log("error in protectRouter in middleware: ", error.message);
    res.status(500).json({ error: "Internal Server Error!" });
  }
};
