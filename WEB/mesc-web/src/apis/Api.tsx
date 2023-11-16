import axios from "axios";

const token = localStorage.getItem("token");

export const api = axios.create({
  baseURL: "https://www.mesc.kr/api/",
  headers: {
    Authorization: token,
  },
});
export const api1 = axios.create({
  baseURL: "https://www.mesc.kr/api/",
});
