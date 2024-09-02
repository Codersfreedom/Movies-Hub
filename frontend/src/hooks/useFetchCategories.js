import axios from "axios";
import { useState } from "react";
import { useContentStore } from "../store/UseContentStore";

const useFetchCategories = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setCategoryContent } = useContentStore();

  const fetchCategories = async (category = "now_playing") => {
    setIsLoading(true);
    try {
      const content = await axios.get(`/api/v1/movie/${category}`);
      setCategoryContent(content.data.category.results);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      setCategoryContent({});
    } finally {
      setIsLoading(false);
    }
  };
  return {isLoading,fetchCategories};
};

export default useFetchCategories;
