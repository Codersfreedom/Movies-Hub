import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import ENV from "../config/dotenv.js";

export const protectRoute = async (req, res, next) => {
  try {
    
    const token = req.cookies['jwt-movieshub'];
    

    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized-token not found!" });
    }

    const decode = jwt.verify(token, ENV.SECRET);

    if (!decode) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized-token is not verified!",
      });
    }

    const user = await User.findById(decode.userId).select("-password");

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("Error in protected route middleware", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};


