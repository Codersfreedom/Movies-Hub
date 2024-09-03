import axios from "axios";
import { useState } from "react";

const useFetchSimilar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [similar, setSimilar] = useState([]);

  const fetchSimilar = async (id, type) => {
    setIsLoading(true);
    try {
      const content = await axios.get(`/api/v1/${type}/${id}/similar`);
      setSimilar(content.data.content);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return { fetchSimilar, isLoading, similar };
};

export default useFetchSimilar;
