import axios from 'axios';
import { BASE_URL } from '../constants/api';

export const signInRequest = (data) => {
  return axios.post(`${BASE_URL}/user/login`, data);
};

export const signUpRequest = (data) => {
  return axios.post(`${BASE_URL}/user/signup`, data);
};
