import  express  from "express";
import { getAllTrending } from "../controllers/trending.controller.js";

const router = express.Router();

router.get("/all",getAllTrending);

export default router