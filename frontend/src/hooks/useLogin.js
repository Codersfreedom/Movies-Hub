import axios from "axios";
import { useAuthStore } from "../store/useAuthSotre";
import toast from "react-hot-toast";

const useLogin = () => {
  const {  setAuthUser } = useAuthStore();

  const login = async (user) => {
    try {
      const response = await axios.post("/api/v1/auth/login", user);
     
      setAuthUser(response.data.user);
      toast.success("Login success");
    } catch (error) {
      toast.error(error.response.data.message)
      setAuthUser(null);
    }
  };
  return { login };
};

export default useLogin;
