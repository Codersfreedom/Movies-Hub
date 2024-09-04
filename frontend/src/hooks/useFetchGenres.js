import axios from "axios";
import { useState } from "react";
import { useContentStore } from "../store/UseContentStore";

const useFetchGenres = () => {
  const [isLoading, setIsloading] = useState(false);
  const { setMovieGenres } = useContentStore();

  const fetchGenres = async (type) => {
    setIsloading(true);
    try {
      const content = await axios.get(`/api/v1/${type}/genres`);
    //   console.log(content.data.genres);
      setMovieGenres(content.data.genres.genres);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsloading(false);
    }
  };
  return { fetchGenres, isLoading };
};

export default useFetchGenres;
