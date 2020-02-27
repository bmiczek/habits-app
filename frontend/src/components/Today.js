import React, { useState } from 'react';
import styled from 'styled-components';

import HabitItem from './HabitItem';
import AddHabitForm from './AddHabitForm';

const StyledToday = styled.div`
  display: flex;
  flex-direction: column;
  width: 375px;
  padding: 10px;
  margin: auto;

  .today-title {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;

    .today-label {
      font-size: ${props => props.theme.font_2xl};
      color: ${props => props.theme.indigo900};
    }

    .today-date {
      color: ${props => props.theme.indigo800};
    }
  }

  .habit-list {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }
`;

const StyledCreateButton = styled.button`
  padding: 20px;
  box-shadow: ${props => props.theme.shadow_base};
  color: ${props => props.theme.indigo800};

  &:hover,
  &:active {
    /* background: ${props => props.theme.gray100}; */
  }
`;

function getFormattedDate(datetime) {
  return `
  ${datetime.getMonth() + 1}/${datetime.getDate() + 1}/${datetime.getFullYear()}
    `;
}

function Today({ habits, addHabit }) {
  const [showAddHabitForm, setShowAddHabitForm] = useState(false);

  return (
    <StyledToday>
      <div className="today-title">
        <div className="today-label">Today</div>
        <div className="today-date">{getFormattedDate(new Date())}</div>
      </div>

      <div className="habit-list">
        {habits.map(habit => (
          <HabitItem habit={habit} key={habit.id} />
        ))}

        {showAddHabitForm ? (
          <AddHabitForm onSubmit={addHabit} />
        ) : (
          <StyledCreateButton
            onClick={() => setShowAddHabitForm(!showAddHabitForm)}
          >
            + Add New Habit
          </StyledCreateButton>
        )}
      </div>
    </StyledToday>
  );
}

Today.propTypes = {};

export default Today;
