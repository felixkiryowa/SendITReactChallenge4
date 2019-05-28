import axios from 'axios';
import promise from 'promise';

const { baseURL } = process.env;

const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: { Authorization: `token ${localStorage.getItem('token_generated')}` },
});

axiosInstance.interceptors.request.use((config) => {
    if (localStorage.getItem('accessToken')
        && config.headers.Authorization === 'Bearer null') {
        config.headers.Authorization = `token ${localStorage.getItem('token_generated')
            }`;
    }
    return config;
});

export default axiosInstance;
