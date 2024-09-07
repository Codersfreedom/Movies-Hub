import axios from "axios";
import { useContentStore } from "../store/UseContentStore";


const useGetDetails = () => {
  const {setIsLoading, setContentDetails } = useContentStore();
    

  const getDetails = async (id,type) => {
    setIsLoading(true);
    setContentDetails({});
    try {
      const content = await axios.get(`/api/v1/${type}/${id}/details`);
      
      setContentDetails(content.data.details);
      
    } catch (error) {
      console.log(error.message);
      setContentDetails({});
      
    }finally{
        setIsLoading(false);
    }
  };
  return{getDetails};
};

export default useGetDetails;
