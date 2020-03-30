import axios from 'axios';

export function setToken(accessToken, refreshToken) {
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);

  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
}

export function removeToken() {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');

  axios.defaults.headers.common['Authorization'] = ``;
}
