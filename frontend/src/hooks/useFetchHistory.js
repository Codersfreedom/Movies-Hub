import axios from "axios";
import { useHistoryStore } from "../store/useHistoryStore";

const useFetchHistory = () => {
  const { setIsLoading, setHistory } = useHistoryStore();

  const fetchHistory = async () => {
    setIsLoading(true)
    try {
      const response = await axios.get("/api/v1/search/history");
      if (response.data.success) {
        setHistory(response.data.content);
      }
    } catch (error) {
      console.log(error.message);
      setHistory({});
    } finally {
      setIsLoading(false);
    }
  };
  return {fetchHistory};
};

export default useFetchHistory;
