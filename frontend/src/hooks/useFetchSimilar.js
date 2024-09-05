import axios from "axios";
import { useState } from "react";
import { useContentStore } from "../store/UseContentStore";

const useFetchSimilar = () => {
  const {setIsLoading} = useContentStore();
  const [similar, setSimilar] = useState([]);

  const fetchSimilar = async (id, type) => {
    setIsLoading(true);
    try {
      const content = await axios.get(`/api/v1/${type}/${id}/similar`);
      setSimilar(content.data.content);
      
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return { fetchSimilar, similar };
};

export default useFetchSimilar;
