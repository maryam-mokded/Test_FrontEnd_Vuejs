import  axios  from "axios"
import store from '@/store/index'

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
}) 

api.interceptors.request.use(
    config => {
       if(store.getters.userToken) {
          config.headers['Authorization'] = `Bearer ${store.getters.userToken}`;
       }
       return config;
    },
    error => {
       Promise.reject(error);
    }
 );

export default api;