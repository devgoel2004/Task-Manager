import axios from "axios";
const api = axios.create({
  baseURL: "https://task-management-ne8g.onrender.com/api/v1",
});
export default api;
