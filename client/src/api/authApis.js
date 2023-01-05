import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://confused-vest-bull.cyclic.app",
  headers: {
    "x-access-token": localStorage.getItem("token"),
  },
  // baseURL: "https://sore-rose-pike-sari.cyclic.app",
});

export const login = (payload) => api.post("/auth/login", payload);
export const register = (payload) => api.post("/auth/register", payload);

const authApis = {
  login,
  register,
};

export default authApis;
