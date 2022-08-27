import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

const axiosInstance = (baseURL = API_URL, ...options) => {
    return axios.create({
        baseURL: baseURL,
        // add default headers here
        ...options,
    });
};

export default axiosInstance;

export const apiCall = axiosInstance();
