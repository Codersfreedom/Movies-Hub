import axios from "axios";
import { useState } from "react";

const useFetchTrailer = () => {
  const [trailer, setTrailer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTrailer = async (id, type) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`/api/v1/${type}/${id}/trailer`);
      console.log(response)
      if (response.data.success) {
        setTrailer(response.data.trailer);
      }
    } catch (error) {
      console.log(error.message);
      setTrailer(null);
    } finally {
      setIsLoading(false);
    }
  };
  return { isLoading, fetchTrailer, trailer };
};

export default useFetchTrailer;
