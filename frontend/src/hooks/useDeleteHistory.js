import axios from "axios";
import toast from "react-hot-toast";

const useDeleteHistory = () => {
  const deleteHistory = async (id) => {
    try {
      const response = await axios.delete(`/api/v1/search/history/${id}`);

      if (response.data.success) {
        toast.success(response.data.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.response.data.message);
    }
  };
  return {deleteHistory};
};

export default useDeleteHistory;
