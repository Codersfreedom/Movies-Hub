import express from "express";
import { getDetails, getGenres, getMoviesByCategory, getReviews, getSimilar, getTrailer } from "../controllers/movie.controller.js";

const router = express.Router();


router.get("/genres",getGenres)
router.get("/:id/trailer",getTrailer)
router.get("/:id/details",getDetails)
router.get("/:id/similar",getSimilar)
router.get("/:id/reviews",getReviews)
router.get("/:category",getMoviesByCategory)

export default router;
