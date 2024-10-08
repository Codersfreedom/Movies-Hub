import { User } from "../models/user.model.js";
import { fetchMovies } from "../services/TMDB.services.js";

export const searchContent = async (req, res) => {
  const { query } = req.params;
  console.log("Search called")
  try {
    const response = await fetchMovies(
      `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1`
    );

    if (response.results.length == 0) {
     return res.status(404).send(null);
    }
    await User.findByIdAndUpdate(req.user._id, {
      $push: {
        searchHistory: {
          id: response.results[0].id,
          image: response.results[0].poster_path || response.results[0].profile_path,
          title: response.results[0].title || response.results[0].name,
          searchType: response.results[0].media_type,
          createdAt: new Date(),
        },
      },
    });

    res.status(200).json({ success: true, content: response.results });
  } catch (error) {
    console.log("Error in searchMovie controller", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const getSearchHistory = async (req, res) => {
  try {
    res.status(200).json({ success: true, content: req.user.searchHistory });
  } catch (error) {
    console.log("Error in getSearchHistory controller", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const deleteSearchHistory = async (req, res) => {
  let { id } = req.params;

  id = parseInt(id);

  

  try {
    await User.findByIdAndUpdate(req.user._id, {
      $pull: {
        searchHistory: { id: id },
      },
    });
    res.status(200).json({ success: true, message: "Deleted successfully" });
  } catch (error) {
    console.log("Error in getSearchHistory controller", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
