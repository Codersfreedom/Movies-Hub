import mongoose from "mongoose";
import ENV from "./dotenv.js";

const url = ENV.URL;

async function connectDB() {
  try {
    const response = await mongoose.connect(url);
    console.log("Connected to database", response.connections[0].host);
  } catch (error) {
    console.log("Error connecting with database:", error.message);
    process.exit(1);
  }
}
export default connectDB;
