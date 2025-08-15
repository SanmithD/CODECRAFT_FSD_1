import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://codecraft-fsd-1.onrender.com/api',
    withCredentials: true
});