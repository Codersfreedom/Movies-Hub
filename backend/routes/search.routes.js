import express from 'express'
import { deleteSearchHistory, getSearchHistory, searchMovie, searchPerson, searchTv } from '../controllers/search.controller.js';

const router = express.Router();

router.get("/person/:query",searchPerson);
router.get("/movie/:query",searchMovie);
router.get("/tv/:query",searchTv);

router.get("/history",getSearchHistory);
router.delete("/history/:id",deleteSearchHistory);

export default router;