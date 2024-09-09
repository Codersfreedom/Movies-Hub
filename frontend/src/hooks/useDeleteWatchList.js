import axios from "axios";
import toast from "react-hot-toast";
import { useWatchListStore } from "../store/useWatchListStore";

const useDelelteWatchList = () => {
  const {setIsSuccess} = useWatchListStore()

  const deleteWatchList = async (id) => {
    try {
      const response = await axios.delete(`/api/v1/user/watchList/${id}`);

      if (response.data.success) {
        toast.success(response.data.message);
        setIsSuccess(true);
      }
    } catch (error) {
      console.log(error.message);
      toast.error("You must login first");
      setIsSuccess(false);
    }
  };
  return { deleteWatchList };
};

export default useDelelteWatchList;
