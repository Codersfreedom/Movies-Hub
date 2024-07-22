import express from 'express'
import { getTVByCategory, getTVDetails, getTVSimilar, getTVTrailer, getTrendingTV } from '../controllers/tv.controller.js';

const router = express.Router();

router.get("/trending",getTrendingTV)
router.get("/:id/trailer",getTVTrailer)
router.get("/:id/details",getTVDetails)
router.get("/:id/similar",getTVSimilar)
router.get("/:category",getTVByCategory)

export default router;