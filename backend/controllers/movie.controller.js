import { fetchMovies } from "../services/TMDB.services.js";

export async function getTrendingMovie(req, res) {
  try {
    const data = await fetchMovies(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US"
    );
    const fetchedMovie =
      data.results[Math.floor(Math.random() * data.results?.length)];
    res.status(200).json({ success: true, content: fetchedMovie });
  } catch (error) {
    console.log("Error in getTrendingMovie controller", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

export async function getTrailer(req, res) {
  try {
    const { id } = req.params;

    const data = await fetchMovies(
      `https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`
    );
    res.status(200).json({ success: true, trailer: data.results });
  } catch (error) {
    if (error.message.includes("404")) {
      return res.status(404).send(null);
    }
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

export async function getDetails(req, res) {
  const { id } = req.params;
  try {

    const data = await fetchMovies(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`
    );
    
    res.status(200).json({ success: true, details: data });
  } catch (error) {
    if (error.message.includes("404")) {
      return res.status(404).send(null);
    }
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

export async function getSimilar(req, res) {
  const { id } = req.params;

  try {
    const data = await fetchMovies(`https://api.themoviedb.org/3/tv/${id}/similar?language=en-US&page=1`);
    res.status(200).json({ success: true, content: data });
  } catch (error) {
    if (error.message.includes("404")) {
      res.status(404).json({ success: false, message: "404 not found!" });
    }
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

export async function getMoviesByCategory(req, res) {
  const { category } = req.params;

  try {
    const data = await fetchMovies(`https://api.themoviedb.org/3/tv/${category}?language=en-US&page=1`);
    res.status(200).json({ success: true, category: data });
  } catch (error) {
    if (error.message.includes("404")) {
      res.status(404).json({ success: false, message: "404 not found!" });
    }
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

