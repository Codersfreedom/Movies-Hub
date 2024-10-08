import axios from "axios";
import { useContentStore } from "../store/UseContentStore";

const useFetchCategories = () => {
  
  const {setIsLoading, setCategoryContent } = useContentStore();

  const fetchCategories = async (category,type) => {
    setIsLoading(true);
    setCategoryContent({});
    try {
      const content = await axios.get(`/api/v1/${type}/${category}`);
      setCategoryContent(content.data.category.results);
      
    } catch (error) {
      console.log(error.message);
      setCategoryContent({});
    } finally {
      setIsLoading(false);
    }
  };
  return {fetchCategories};
};

export default useFetchCategories;
