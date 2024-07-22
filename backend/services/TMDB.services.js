import axios from "axios";
import ENV from "../config/dotenv.js";

export const fetchMovies = async (url) => {
  
  const options = {
    headers: {
      accept: "application/json",
      Authorization: 'Bearer ' + ENV.MOVIE_API
    },
  };

  const response = await axios.get(url, options);
  
  if(response.status !== 200){
    throw new Error("Failed to fetch movies from TMDB API"+response.statusText);
  }
  return response.data;
};
