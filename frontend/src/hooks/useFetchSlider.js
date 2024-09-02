import axios from "axios";
import { useState } from "react";
import { useContentStore } from "../store/UseContentStore";

const useFetchSlider = () => {
  const [isLoading, setIsLoading] = useState(false);

 const {setSliderData} = useContentStore();

  const fetchSlider = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("/api/v1/trending/all");
      const data = await response.data.content;
      setSliderData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      setSliderData({});
    } finally {
      setIsLoading(false);
    }
  };
  return { isLoading, fetchSlider };
};

export default useFetchSlider;
