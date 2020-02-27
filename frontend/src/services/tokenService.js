import axios from 'axios';

export function setToken(accessToken, refreshToken) {
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);

  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
}
