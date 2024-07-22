import jwt from "jsonwebtoken";
import ENV from "../config/dotenv.js";

const secret = ENV.SECRET;
const node_env = ENV.NODE_ENV;

export const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, secret, { expiresIn: "15d" });

  res.cookie("jwt-movieshub", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
    secure: node_env !== "development",
  });
}
