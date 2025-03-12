import rateLimit from "express-rate-limit";
import User from "../models/user.model.js";

const signLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
  message: "Too many requests from the same IP address, please try again after a minute"
})

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find().select("-password");

    res.status(200).json({
      success: true,
      message: "User fetched successfully.",
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

export const getUser = [signLimiter, async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select("-password");

    if(!user){
        const error = new Error("User not found.");
        error.statusCode = 404;
        throw error;
    }

    res.status(200).json({
      success: true,
      message: "User fetched successfully.",
      data: user,
    });
  } catch (error) {
    next(error);
  }
}];
