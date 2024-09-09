import express from "express";
import path from "path";
import cookieParser from "cookie-parser";

import ENV from "./config/dotenv.js";
import connectDB from "./config/db.js";

import authRoutes from "./routes/auth.routes.js";
import movieRoutes from "./routes/movie.routes.js";
import userRoutes from "./routes/user.routes.js";
import tvRoutes from "./routes/tv.routes.js";
import searchRoutes from "./routes/search.routes.js";
import trendingRoutes from "./routes/trending.routes.js";
import { protectRoute } from "./middleware/protectRoute.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", protectRoute, userRoutes);
app.use("/api/v1/movie", movieRoutes);
app.use("/api/v1/tv", tvRoutes);
app.use("/api/v1/trending", trendingRoutes);
app.use("/api/v1/search", protectRoute, searchRoutes);

const PORT = ENV.PORT;
const __dirname = path.resolve();

if ((ENV.NODE_ENV = "production")) {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  connectDB();
  console.log(`server is running on port ${PORT}`);
});
