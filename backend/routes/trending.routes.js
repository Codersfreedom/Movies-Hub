import  express  from "express";
import { getAllTrending, getTrendingMovie, getTrendingTV } from "../controllers/trending.controller.js";

const router = express.Router();

router.get("/all",getAllTrending);
router.get("/movie",getTrendingMovie);
router.get("/tv",getTrendingTV);

export default router