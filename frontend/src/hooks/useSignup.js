import axios from "axios";
import { useAuthStore } from "../store/useAuthSotre";
import toast from "react-hot-toast";

const useSignup = () => {
  const { setAuthUser } = useAuthStore();

  const signup = async (credentials) => {
    
    try {
      const response = await axios.post("/api/v1/auth/signup", credentials);
      if (response.data.success) {
        setAuthUser(response.data.user);
      }
    } catch (error) {
        toast(error.response.data.message);
        console.log(error);
        setAuthUser(null);
    }
  };
  return {signup}
};

export default useSignup;
