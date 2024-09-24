import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1',
  timeout: 2000,
  headers: {
    'X-Custom-Header': 'foobar',
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

api.interceptors.request.use(
  (response) => response, 
  (error) =>error.response
);

api.interceptors.response.use(
  (response) => response, 
  (error) =>error.response
);