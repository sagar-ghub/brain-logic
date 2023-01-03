import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "x-access-token": localStorage.getItem("token"),
  },
  // baseURL: "https://sore-rose-pike-sari.cyclic.app",
});

export const login = (payload) => api.post("/auth/login", payload);
export const register = (payload) => api.post("/auth/register", payload);

export const createNotice = (payload) => api.post("/create/notice", payload);
export const createEvent = (payload) => api.post("/create/event", payload);

// export const createClient = (payload) => api.post("/create/client", payload);
// export const createInvoice = (payload) => api.post("/create/invoice", payload);
// export const createTransaction = (payload) =>
//   api.post("/create/transaction", payload);

//get
export const getBooks = (query, skip) =>
  api.get(`/api/books?query=${query}&skip=${skip}`);

export const getNotices = () => api.get(`/get/notices`);
export const getEvents = () => api.get(`/get/events`);
export const getMembers = () => api.get(`/get/members`);

const apis = {
  login,
  register,
  createNotice,
  createEvent,
  getNotices,
  getMembers,
};

export default apis;
