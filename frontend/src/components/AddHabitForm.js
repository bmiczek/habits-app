import React, { useState } from 'react';

import styled from 'styled-components';

const StyledCard = styled.div`
  padding: 20px;
  box-shadow: ${props => props.theme.shadow_base};
  border-radius: 10px;

  background: ${props => props.theme.indigo500};
  color: ${props => props.theme.indigo100};
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  span {
    text-align: center;
  }

  select {
  }

  input {
    border: 0;
    font-size: ${props => props.theme.font_xl};
    text-align: center;
    background: ${props => props.theme.indigo700};
    color: ${props => props.theme.indigo100};
    padding: 10px;
    border-radius: 3px;

    &:focus {
      outline: 0;
    }

    &::placeholder {
      color: ${props => props.theme.indigo100};
    }
  }

  button[type='submit'] {
    margin-top: 20px;
    background: ${props => props.theme.indigo300};
    color: ${props => props.theme.indigo800};
  }
`;

export default function AddHabitForm({ onSubmit }) {
  const [newHabit, setNewHabit] = useState({
    title: 'do something great',
    occurrence: '1',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNewHabit({ ...newHabit, [name]: value });
  }

  return (
    <StyledCard>
      <StyledForm onSubmit={e => onSubmit(newHabit, e)}>
        <span>
          Every{' '}
          <select
            name="occurrence"
            value={newHabit.occurrence}
            onChange={handleChange}
          >
            <option value="1">day</option>
            <option value="2">week</option>
            <option value="3">weekday</option>
          </select>{' '}
          I want to
        </span>
        <input
          type="text"
          name="title"
          value={newHabit.title}
          onChange={handleChange}
          autocomplete="off"
          onFocus={e => e.target.select()}
        ></input>
        <button type="submit">+ Add</button>
      </StyledForm>
    </StyledCard>
  );
}
