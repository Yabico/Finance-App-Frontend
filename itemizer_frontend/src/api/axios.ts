import axios, { type AxiosInstance } from 'axios';

export const plaidApi: AxiosInstance = axios.create({
    baseURL: "https://baee2wl750.execute-api.us-east-1.amazonaws.com/prod/",
    headers: {
        'Content-Type': 'application/json',
    },
});

export const authApi: AxiosInstance = axios.create({
    baseURL: "https://vpd6k54yzc.execute-api.us-east-1.amazonaws.com/prod/",
    headers: {
        'Content-Type': 'application/json',
    },
});

// For Plaid
// "https://baee2wl750.execute-api.us-east-1.amazonaws.com/prod/link-token"
// "https://baee2wl750.execute-api.us-east-1.amazonaws.com/prod/exchange-token"

// For Authentication
// https://vpd6k54yzc.execute-api.us-east-1.amazonaws.com/prod/register

// Optional: Add a request interceptor for tokens later
// api.interceptors.request.use(
//     (config: InternalAxiosRequestConfig) => {
//         const token = localStorage.getItem('token');
//         if (token && config.headers) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => Promise.reject(error)
// );

// export default api;