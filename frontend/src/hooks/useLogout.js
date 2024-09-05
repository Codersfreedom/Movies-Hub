import axios from "axios";

import toast from "react-hot-toast";
import { useAuthStore } from "../store/useAuthSotre";

const useLogout = () => {
  const { setAuthUser } = useAuthStore();

  const logout = async () => {
    try {
      const response = await axios.post("/api/v1/auth/logout");
      setAuthUser(null);
      toast.success(response.data.message);
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  return { logout };
};

export default useLogout;
