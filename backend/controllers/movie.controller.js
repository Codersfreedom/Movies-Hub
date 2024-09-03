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
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`
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
    const data = await fetchMovies(
      `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`
    );
    res.status(200).json({ success: true, content: data });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

export async function getMoviesByCategory(req, res) {
  const { category } = req.params;
  console.log(category);
  try {
    const data = await fetchMovies(
      `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`
    );
    res.status(200).json({ success: true, category: data });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

export async function getReviews(req, res) {
  const { id } = req.params;
  console.log(id)

  try {
    const data = await fetchMovies(
      `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`
    );
    res.status(200).json({ success: true, review: data.results });
  } catch (error) {
    console.log("Error in movies getReviews movie controller", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}
