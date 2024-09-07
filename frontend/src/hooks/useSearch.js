import axios from "axios";
import { useSearchStore } from "../store/useSearchStore";

const useSearch = () => {
  const { setIsLoading, setSearchContent } = useSearchStore();

  const searchContent = async (query) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`/api/v1/search/multi/${query}`);
      setSearchContent(response.data.content);
    } catch (error) {
      console.log(error.response.data.message);
      setSearchContent({});
    } finally {
      setIsLoading(false);
    }
  };
  return {searchContent};
};

export default useSearch;
