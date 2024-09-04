import { fetchMovies } from "../services/TMDB.services.js";

export const getAllTrending = async (req, res) => {
  try {
    const data = await fetchMovies(
      "https://api.themoviedb.org/3/trending/all/day?language=en-US"
    );
    console.log("called");
    res.status(200).json({ success: true, content: data.results });
  } catch (error) {
    console.log("Error in trending controller: ", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export async function getTrendingMovie(req, res) {
  try {
    const data = await fetchMovies(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US"
    );
    
    res.status(200).json({ success: true, content: data.results });
  } catch (error) {
    console.log("Error in getTrendingMovie controller", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

export async function getTrendingTV(req, res) {
  try {
    const data = await fetchMovies(
      "https://api.themoviedb.org/3/trending/tv/day?language=en-US"
    );
    
    res.status(200).json({ success: true, content: data.results });
  } catch (error) {
    console.log("Error in getTrendingTv controller", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}