import axios from "axios";
import { useContentStore } from "../store/UseContentStore";
import { useState } from "react";

const useGetDetails = () => {
  const { setContentDetails } = useContentStore();
    const[isLoading,setIsLoading] = useState(false);

  const getDetails = async (id) => {
    setIsLoading(true);
    try {
      const content = await axios.get(`/api/v1/movie/${id}/details`);
      
      setContentDetails(content.data.details);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      setContentDetails({});
      
    }finally{
        setIsLoading(false);
    }
  };
  return{getDetails,isLoading};
};

export default useGetDetails;
