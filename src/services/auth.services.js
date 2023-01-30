import { signInRequest, signUpRequest } from '../api/auth.api';
import { toast } from 'react-toastify';

export const signIn = (data) => {
  signInRequest(data)
    .then((res) => {
      if (res.status === 200) {
        localStorage.setItem('token', res.data.token);
        window.location.href = '/';
      }
    })
    .catch((err) => toast.error(err.response.data.message));
};

export const signUp = (data) => {
  signUpRequest(data)
    .then((res) => {
      if (res.status === 200) {
        localStorage.setItem('token', res.data.token);
        window.location.href = '/';
      }
    })
    .catch((err) => toast.error(err.response.data.message));
};

export const signOut = () => {
  localStorage.removeItem('token');
  window.location.href = '/';
};
