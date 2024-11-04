import axios from "axios";
import toast from "react-hot-toast";
import { useWatchListStore } from "../store/useWatchListStore";

const useAddToWatchList = () => {
  const { setIsLoading } = useWatchListStore();

  const addToWatchList = async (id, type, title, image) => {
    setIsLoading(true);
    try {
      const response = await axios.post("/api/v1/user/watchList/add", {
        id,
        type,
        title,
        image,
      });
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        throw new Error("Something went wrong!");
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
      
    } finally {
      setIsLoading(false);
    }
  };
  return { addToWatchList };
};

export default useAddToWatchList;
