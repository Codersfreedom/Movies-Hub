import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { generateTokenAndSetCookie } from "../utils/generateToken.js";

export async function signup(req, res) {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
     return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
     return res.status(400).json({
        success: false,
        message: "Please enter a valid email address",
      });
    }
    if (!password.length >= 6) {
     return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters",
      });
    }
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
    return  res.status(400).json({ success: false, message: "Email already exists" });
    }
    const existingUsername = await User.findOne({ username });

    if (existingUsername) {
     return res
        .status(400)
        .json({ success: false, message: "Username already exists" });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    generateTokenAndSetCookie(newUser._id, res);
    await newUser.save();
    res.status(201).json({
      success: true,
      user: {
        ...newUser._doc,
        password: "",
      },
    });
  } catch (error) {
    console.log("Error in singup controller: " + error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    // console.log(email, password);
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);

    if (!isPasswordValid) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Password" });
    }
    generateTokenAndSetCookie(user._id, res);
    res.status(200).json({
      success: true,
      user: {
        ...user._doc,
        password: "",
      },
    });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

export async function logout(_, res) {
  try {
    res.clearCookie("jwt-movieshub");
    res.status(200).json({ success: true, message: "Logout successfull" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

export async function authCheck(req, res) {
  console.log("Auth check called")
  try {
    console.log("req.user",req.user);
    res.status(200).json({ success: true, user: req.user });
  } catch (error) {
    console.log("Error in authcheck controller", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}
