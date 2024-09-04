import axios from "axios";
import { useState } from "react";
import { useContentStore } from "../store/UseContentStore";

const useFetchTrending = () => {
  const [isLoading, setIsLoading] = useState(false);

 const {setTrendingContent} = useContentStore();

  const fetchTrending = async (type) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`/api/v1/trending/${type}`);
      const data = await response.data.content;
      setTrendingContent(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      setTrendingContent({});
    } finally {
      setIsLoading(false);
    }
  };
  return { isLoading, fetchTrending };
};

export default useFetchTrending;
