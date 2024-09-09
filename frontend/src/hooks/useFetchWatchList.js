import axios from "axios";
import { useWatchListStore } from "../store/useWatchListStore";

const useFetchWatchList = () => {
  const { setWishList, setIsLoading } = useWatchListStore();

  const fetchWatchList = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("/api/v1/user/watchList");
      if (response.data.success) {
        setWishList(response.data.content);
      }
    } catch (error) {
      console.log(error.message);
      setWishList({});
    } finally {
      setIsLoading(false);
    }
  };
  return { fetchWatchList };
};

export default useFetchWatchList;
