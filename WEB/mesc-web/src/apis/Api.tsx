import axios from "axios";

// const token = localStorage.getItem("token");
const token =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBhZG1pbi5jb20iLCJBdXRoIjoiQURNSU4iLCJ1c2VySWQiOjEzLCJleHAiOjE3MDAwMjk0NDF9.Ob-82iFaIus3qnDWu2PuYfSmWYXwMV1wtECoStFKlj8";

export const api = axios.create({
  baseURL: "https://www.mesc.kr/api/",
  headers: {
    Authorization: token,
  },
});
