import express from "express";
import { getDetails, getMoviesByCategory, getSimilar, getTrailer, getTrendingMovie } from "../controllers/movie.controller.js";

const router = express.Router();

router.get("/trending", getTrendingMovie);
router.get("/:id/trailer",getTrailer)
router.get("/:id/details",getDetails)
router.get("/:id/similar",getSimilar)
router.get("/:category",getMoviesByCategory)

export default router;
