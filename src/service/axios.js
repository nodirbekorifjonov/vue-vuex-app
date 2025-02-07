import { getItem } from "@/helpers/persistanceStorage";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/api";

axios.interceptors.request.use((config) => {
  const token = getItem("token");
  const authorization = token ? `Token ${token}` : "";
  config.headers.Authorization = authorization;
  return config;
});

export default axios;
