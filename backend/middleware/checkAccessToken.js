const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.verifyAccessToken = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(400).json({ success: false, message: "Token not found" });
  }
  let user;
  try {
    user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  } catch (error) {
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
  try {
    user = await User.findById(user.id);
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "User not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};
