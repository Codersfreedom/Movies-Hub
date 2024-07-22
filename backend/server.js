import express from "express";
import ENV from "./config/dotenv.js";

import authRoutes from "./routes/auth.routes.js";
import movieRoutes from "./routes/movie.routes.js";
import userRoutes from "./routes/user.routes.js";
import tvRoutes from "./routes/tv.routes.js";

import connectDB from "./config/db.js";
const app = express();

app.use(express.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/movie", movieRoutes);
app.use("/api/v1/tv",tvRoutes);

const PORT = ENV.PORT;

app.listen(PORT, () => {
  connectDB();
  console.log(`server is running on port ${PORT}`);
});
