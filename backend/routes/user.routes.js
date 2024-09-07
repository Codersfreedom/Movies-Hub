import express from 'express'
import { deleteWatchList, getWatchList } from '../controllers/user.controller.js';

const router = express.Router();

router.get("/watchList",getWatchList);
router.delete("/watchList/:id",deleteWatchList);

export default router;