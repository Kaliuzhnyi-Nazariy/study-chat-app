import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogOut = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const LogOut = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/auth/logout", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.error) {
        throw new Error(res.error);
      }

      console.log(res);
      setAuthUser(null);
      localStorage.removeItem("user-info");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(true);
    }
  };
  return { loading, LogOut };
};

export default useLogOut;
