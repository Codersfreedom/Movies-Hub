import axios from "axios";
import { useState } from "react";

const useFetchReviews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async (id, type) => {
    setIsLoading(true);
    try {
      const content = await axios.get(`/api/v1/${type}/${id}/reviews`);
     const data = content.data.review;
     console.log(data)
    const filteredData =  data.filter((review)=>review.author_details.rating !=null);
      setReviews(filteredData);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return { fetchReviews, isLoading, reviews}
};

export default useFetchReviews;
