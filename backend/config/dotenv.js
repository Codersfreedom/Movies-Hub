import dotenv from "dotenv";

dotenv.config();

const ENV = {
  PORT: process.env.PORT || 8000,
  URL: process.env.MONGODB_URI,
  SECRET:process.env.SECRET,
  NODE_ENV:process.env.ENVIRONMENT,
  MOVIE_API:process.env.MOVIES_API_KEY,
};
export default ENV;
