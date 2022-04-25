import axios from 'axios';
import Config from './config';

const instance = axios.create({
  baseURL: Config.BASE_URL,
  headers: {
    apikey: Config.API_KEY,
    'Content-Type': 'application/json',
  },
});

// Alter defaults after instance has been created

instance.interceptors.request.use(
  async config => {
    return config;
  },
  error =>
    // Do something with request error
    error,
);

// Add a response interceptor
instance.interceptors.response.use(
  response =>
    // Do something with response data
    Promise.resolve(response),
  error =>
    // Do something with response error
    Promise.reject(error),
);

export function httpGet(url) {
  return instance.get(url);
}

export function httpPost(url, payload) {
  return instance.post(url, payload);
}

export function httpPut(url, payload) {
  return instance.put(url, payload);
}

export function httpDelete(url) {
  return instance.delete(url);
}
