import express from 'express'
import { getReviews, getTVByCategory, getTVDetails, getTVSimilar, getTVTrailer } from '../controllers/tv.controller.js';

const router = express.Router();


router.get("/:id/trailer",getTVTrailer)
router.get("/:id/details",getTVDetails)
router.get("/:id/similar",getTVSimilar)
router.get("/:id/reviews",getReviews)
router.get("/:category",getTVByCategory)


export default router;