import { fetchMovies } from "../services/TMDB.services.js";


export async function getTVTrailer(req, res) {
  const { id } = req.params;
  const data = await fetchMovies(
    `https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`
  );
  res.status(200).json({ success: true, trailer: data.results });
  try {
  } catch (error) {
    if (error.message.includes("404")) {
      res.status(404).json({ success: false, message: "404 not found!" });
    }
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}
export async function getTVDetails(req, res) {
  const { id } = req.params;
  try {
    const data = await fetchMovies(
      `https://api.themoviedb.org/3/tv/${id}?language=en-US`
    );
    
    res.status(200).json({ success: true, details: data });
  } catch (error) {
    if (error.message.includes("404")) {
      res.status(404).json({ success: false, message: "404 not found!" });
    }
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}
export async function getTVSimilar(req, res) {
  const { id } = req.params;

  try {
    const data = await fetchMovies(
      `https://api.themoviedb.org/3/tv/${id}/similar?language=en-US&page=1`
    );
    res.status(200).json({ success: true, content: data.results });
  } catch (error) {
    if (error.message.includes("404")) {
      res.status(404).json({ success: false, message: "404 not found!" });
    }
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}
export async function getTVByCategory(req, res) {
  const { category } = req.params;
  console.log(category);
  try {
    const data = await fetchMovies(
      `https://api.themoviedb.org/3/tv/${category}?language=en-US&page=1`
    );
    res.status(200).json({ success: true, category: data });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

export async function getReviews(req, res) {

  const { id } = req.params;
  try {
    const data = await fetchMovies(
      `https://api.themoviedb.org/3/tv/${id}/reviews?language=en-US&page=1`
    );
    res.status(200).json({ success: true, review: data.results });
  } catch (error) {
    if (error.message.includes("404")) {
      res.status(404).json({ success: false, message: "404 not found!" });
    }
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

export async function getTVGenres(req, res) {

  try {
    const data = await fetchMovies(
      'https://api.themoviedb.org/3/genre/tv/list?language=en'
    );
    res.status(200).json({ success: true, genres: data });
  } catch (error) {
    if (error.message.includes("404")) {
      res.status(404).json({ success: false, message: "404 not found!" });
    }
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}