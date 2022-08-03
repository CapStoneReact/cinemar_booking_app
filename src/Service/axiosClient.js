import axios from "axios";
import store from "../configStore";
// import store from "../configStore";

const axiosClient = axios.create({
    baseURL: "https://movienew.cybersoft.edu.vn/api/",
    headers: {
        TokenCybersoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNzEiLCJIZXRIYW5TdHJpbmciOiIyOS8xMi8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NzIyNzIwMDAwMDAiLCJuYmYiOjE2NDU5ODEyMDAsImV4cCI6MTY3MjQxOTYwMH0.SZe3CJl1OkNH-0zfzqOV0CSC8WZ6q2hw64UykpCytT0"
    },
});

// Add a request interceptor
axiosClient.interceptors.request.use(function (config) {
    // Do something before request is sent
    if (config.headers) {
        const { accessToken = "" } = store.getState().auth.user || {}
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`
        }
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axiosClient.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data.content;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error.response.data.content);
});

export default axiosClient;