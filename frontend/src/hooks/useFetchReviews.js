import axios from "axios";
import { useState } from "react";
import { useContentStore } from "../store/UseContentStore";

const useFetchReviews = () => {
  const {setIsLoading} = useContentStore();
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async (id, type) => {
    setIsLoading(true);
    try {
      const content = await axios.get(`/api/v1/${type}/${id}/reviews`);
      
      const data = content.data.review;
      
      const filteredData = data.filter(
        (review) => review.author_details.rating != null
      );
      setReviews(filteredData);
      
    } catch (error) {
      console.log(error.message);
      setReviews([]);
    } finally {
      setIsLoading(false);
    }
  };
  return { fetchReviews, reviews };
};

export default useFetchReviews;
