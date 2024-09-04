import axios from "axios";
import { useState } from "react";
import { useContentStore } from "../store/UseContentStore";

const useFetchTrending = () => {
  

 const {setIsLoading,setTrendingContent} = useContentStore();

  const fetchTrending = async (type) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`/api/v1/trending/${type}`);
      const data =  response.data.content;
      
      setTrendingContent(data);
      
    } catch (error) {
      console.log(error.message);
      setTrendingContent({});
    } finally {
      setIsLoading(false);
    }
  };
  return {  fetchTrending };
};

export default useFetchTrending;
