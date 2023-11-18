import axios from "axios";

const token = localStorage.getItem("accessToken");

export const api = axios.create({
  baseURL: "https://www.mesc.kr/api/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
export const api1 = axios.create({
  baseURL: "https://www.mesc.kr/api/",
});
