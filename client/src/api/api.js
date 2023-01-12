import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://confused-vest-bull.cyclic.app",
  // headers: {
  //   "x-access-token": localStorage.getItem("token"),
  // },
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

export const getNotices = () => {
  return api.get(`/get/notices`, {
    headers: { "x-access-token": localStorage.getItem("token") },
  });
};
export const getEvents = () => api.get(`/get/events`);
export const getMembers = () => {
  return api.get(`/get/members`, {
    headers: { "x-access-token": localStorage.getItem("token") },
  });
};
export const getQuestions = () => api.get(`/get/questions`);
export const getQuestionById = (id) => api.get(`/get/question/${id}`);
export const getScore = (id) => api.get(`/get/score/${id}`);
export const createQuestion = (payload) =>
  api.post(`/create/question`, payload);
export const updateScore = (payload) => {
  return api.post(
    `/create/updateScore`,
    { ...payload },
    {
      headers: { "x-access-token": localStorage.getItem("token") },
    }
  );
};

const apis = {
  // login,
  // register,
  createNotice,
  createEvent,
  getNotices,
  getMembers,
  getQuestions,
  getQuestionById,
  getScore,
  updateScore,
  createQuestion,
};

export default apis;
