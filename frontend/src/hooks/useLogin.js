import axios from "axios";
import { useAuthStore } from "../store/useAuthSotre";
import toast from "react-hot-toast";

const useLogin = () => {
  const { setIsLoading, setAuthUser } = useAuthStore();

  const login = async (user) => {
    setIsLoading(true);
    try {
      const response = await axios.post("/api/v1/auth/login", user);
     
      setAuthUser(response.data.user);
      toast.success("Login success");
    } catch (error) {
      toast.error(error.response.data.message)
      setAuthUser(null);
    } finally {
      setIsLoading(false);
    }
  };
  return { login };
};

export default useLogin;
