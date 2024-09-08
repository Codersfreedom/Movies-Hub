import axios from "axios";
import toast from "react-hot-toast";

const useDelelteWatchList = () => {
  const deleteWatchList = async (id) => {
    try {
      const response = await axios.delete(`/api/v1/user/watchList/${id}`);

      if (response.data.success) {
        toast.success(response.data.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.response.data.message);
    }
  };
  return { deleteWatchList };
};

export default useDelelteWatchList;
