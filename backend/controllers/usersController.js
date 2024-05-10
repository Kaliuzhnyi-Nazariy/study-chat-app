import User from "../models/userSchema.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedID = req.user._id;

    const filteredUsers = await User.find({ _id: { $ne: loggedID } }).select(
      "-password"
    );

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("error in gerUsersForSidebar controller: ", error.message);
    res.status(500).json({ error: "Internal Server Error!" });
  }
};
