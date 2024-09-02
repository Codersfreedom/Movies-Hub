import { fetchMovies } from "../services/TMDB.services.js";

export const getAllTrending = async (req, res) => {
  try {
    const data = await fetchMovies(
      "https://api.themoviedb.org/3/trending/all/day?language=en-US"
    );
    console.log("called");
    res.status(200).json({ success: true, content: data.results.slice(0,5) });
  } catch (error) {
    console.log("Error in trending controller: ", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
