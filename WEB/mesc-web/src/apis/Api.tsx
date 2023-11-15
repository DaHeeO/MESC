import axios from "axios";

// const token = localStorage.getItem("token");
const token =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBhZG1pbi5jb20iLCJBdXRoIjoiQURNSU4iLCJ1c2VySWQiOjEzLCJleHAiOjE3MDAxMTcwNzB9.XuTO8Prwsq3o3QLTPdpnU3Dj-15EEEi9JoelOWtSvXQ";

export const api = axios.create({
  baseURL: "https://www.mesc.kr/api/",
  headers: {
    Authorization: token,
  },
});
