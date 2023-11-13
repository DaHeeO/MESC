import axios from "axios";

// const token = localStorage.getItem("token");
const token =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBhZG1pbi5jb20iLCJBdXRoIjoiQURNSU4iLCJ1c2VySWQiOjEzLCJleHAiOjE2OTk5NDQwMDh9.CnxR2JZKFZst1gHaWZQOvWDFNpfGRzBrM5IJC4EVr7g";

export const api = axios.create({
  baseURL: "https://www.mesc.kr/api/",
  headers: {
    Authorization: token,
  },
});
