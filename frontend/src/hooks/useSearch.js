import axios from "axios";
import { useSearchStore } from "../store/useSearchStore";
import toast from "react-hot-toast";

const useSearch = () => {
  const { setIsLoading, setSearchContent } = useSearchStore();

  const searchContent = async (query) => {
    
    setIsLoading(true);
    try {
      const response = await axios.get(`/api/v1/search/multi/${query}`);
      if (response.data.content) {
        setSearchContent(response.data.content);
      }
    } catch (error) {
      console.log(error.response.data.message);
      toast.error("Please login to search content")
      setSearchContent({});
    } finally {
      setIsLoading(false);
    }
  };
  return { searchContent };
};

export default useSearch;
