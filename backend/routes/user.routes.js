import express from "express";
import {
  addToWatchList,
  deleteWatchList,
  getWatchList,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/watchList", getWatchList);
router.post("/watchList/add", addToWatchList);
router.delete("/watchList/:id", deleteWatchList);

export default router;
