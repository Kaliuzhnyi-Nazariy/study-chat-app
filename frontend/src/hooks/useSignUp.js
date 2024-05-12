import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

export const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signUp = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = inputErrors({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });

    if (!success) return;
    setLoading(true);
    try {
      const data = await axios.post(
        "/auth/signup",
        {
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("user-info", JSON.stringify(data.data));

      setAuthUser(data.data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signUp };
};

export default useSignUp;

function inputErrors({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("Fullfil all fields!");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Paswords do not match!");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters!");
    return false;
  }

  return true;
}
