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

export default function Register() {
  let history = useHistory();

  const [registerData, setRegisterData] = useState({
    username: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMessage(null);

    if (!registerData.username || !registerData.password) {
      setErrorMessage('Enter a username and password');
      return;
    }

    if (registerData.password !== registerData.reenterPassword) {
      setErrorMessage('Passwords must match');
      return;
    }

    try {
      const response = await axios.post('/api/register', registerData);

      setToken(response.data.access, response.data.refresh);

      history.push('/home');
    } catch (exception) {
      setErrorMessage(exception.response.data.detail);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  }

  return (
    <StyledFormCard>
      <div className="title">Register</div>
      <StyledForm onSubmit={handleSubmit}>
        {errorMessage ? (
          <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
        ) : null}

        <div className="form-item">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={registerData.username}
            onChange={handleChange}
            placeholder="Username"
          ></input>
        </div>

        <div className="form-item">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={registerData.password}
            onChange={handleChange}
            placeholder="Password"
          ></input>
        </div>

        <div className="form-item">
          <label htmlFor="reenterPassword">Reenter Password</label>
          <input
            type="password"
            name="reenterPassword"
            value={registerData.reenterPassword}
            onChange={handleChange}
            placeholder="Password"
          ></input>
        </div>

        <StyledButton type="submit">Register</StyledButton>
        <StyledButtonLink
          onClick={() => {
            history.push('/login');
          }}
        >
          Cancel
        </StyledButtonLink>
      </StyledForm>
    </StyledFormCard>
  );
}
