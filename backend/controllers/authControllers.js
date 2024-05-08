import User from "../models/userSchema";

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

    // hash passwords

    // set avatars
    const boyStandartAvatar = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlStandartAvatar = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    // create new user

    const newUser = new User({
      fullName,
      username,
      password,
      gender,
      profilePic: gender === girl ? girlStandartAvatar : boyStandartAvatar,
    });

    // save new user to db

    await newUser.save();

    res.status(201).json({
      _id: newUser.id,
      fullName: newUser.fullName,
      username: newUser.username,
      profilePic: newUser.profilePic,
    });
  } catch (error) {
    console.log("error in signup controller ", error.message);
    res.status(500).json("Internal Server Error");
  }
};

export const login = (req, res) => {
  console.log("It's a login controller");
  res.send("It's a login controller");
};

export const logout = (req, res) => {
  console.log("It's a logout controller");
  res.send("It's a logout controller");
};
