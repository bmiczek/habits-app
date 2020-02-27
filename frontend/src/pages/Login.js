import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { setToken } from '../services/tokenService';
import {
  StyledForm,
  StyledFormCard,
  StyledErrorMessage,
  StyledButton,
  StyledButtonLink,
} from '../styles/FormStyles';

export default function Login() {
  let history = useHistory();

  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMessage(null);

    if (!loginData.username || !loginData.password) {
      setErrorMessage('Enter your username and password');
      return;
    }

    try {
      const response = await axios.post('/api/token/', loginData);

      setToken(response.data.access, response.data.refresh);

      history.push('/home');
    } catch (exception) {
      setErrorMessage(exception.response.data.detail);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  }

  return (
    <StyledFormCard>
      <div className="title">Login</div>
      <StyledForm onSubmit={handleSubmit}>
        {errorMessage ? (
          <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
        ) : null}

        <div className="form-item">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={loginData.username}
            onChange={handleChange}
            placeholder="Username"
          ></input>
        </div>

        <div className="form-item">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            placeholder="Password"
          ></input>
        </div>

        <StyledButton type="submit">Login</StyledButton>
        <StyledButtonLink
          onClick={() => {
            history.push('/register');
          }}
        >
          Register
        </StyledButtonLink>
      </StyledForm>
    </StyledFormCard>
  );
}
