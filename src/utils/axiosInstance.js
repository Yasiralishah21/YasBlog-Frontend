import axios from "axios";

const axiosInstance = axios.create({ baseURL: "http://localhost:8000/api/v1" });   //This is default addresss in postmman, so no need to pass it again an again instead make it as default here in AxiosInstance.js

axiosInstance.interceptors.request.use((req) => {
  const stringifyBlogData = window.localStorage.getItem("blogData");

  if (stringifyBlogData) {
    const blogData = JSON.parse(stringifyBlogData);
    const token = blogData.token;

    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default axiosInstance;
