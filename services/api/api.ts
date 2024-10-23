import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://taskteaapi.com/api/v1',
  timeout: 10000,
  headers: {
    'X-Custom-Header': 'foobar',
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

api.interceptors.request.use(
  (response) => response, 
  (error) => error.response
);

api.interceptors.response.use(
  (response) => response, 
  (error) => error.response
);
