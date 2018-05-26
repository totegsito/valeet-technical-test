import axios from 'axios';
import { baseUrl } from '../constants/httpClient';

const httpClient = axios.create({
  baseURL: baseUrl,
});

export const setAuthenticationHeader = (token) => {
  httpClient.defaults.headers.common.Authorization = token;
};

export default httpClient;
