import express from "express";
import {
  deleteSearchHistory,
  getSearchHistory,
  searchContent,
} from "../controllers/search.controller.js";

const router = express.Router();

router.get("/multi/:query", searchContent);
router.get("/history", getSearchHistory);
router.delete("/history/:id", deleteSearchHistory);

export default router;
