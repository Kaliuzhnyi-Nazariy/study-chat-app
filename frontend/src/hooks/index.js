import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000/api";

import useSignUp from "./useSignUp.js";
import useLogOut from "./useLogOut.js";

export default (useSignUp, useLogOut);
