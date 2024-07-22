import express from 'express'
import { getSearchHistory, getWatchList } from '../controllers/user.controller.js';

const router = express.Router();

router.get("/searchHistory",getSearchHistory);
router.get("/watchList",getWatchList);

export default router;