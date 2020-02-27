import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  box-shadow: ${props => props.theme.shadow_base};
  border-radius: 10px;

  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;

const StyledHabitTitle = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1rem;

  .title-occurrence {
    color: ${props => props.theme.gray500};
    font-size: ${props => props.theme.font_xs};
  }
`;

const StyledButton = styled.button`
  background: ${props => props.theme.indigo600};
  color: ${props => props.theme.indigo100};

  &:hover,
  &:active {
    background: ${props => props.theme.indigo700};
  }
`;

const occurrenceMap = {
  1: 'Daily',
  2: 'Weekly',
  3: 'Weekday',
};

function HabitItem({ habit }) {
  return (
    <StyledCard>
      <StyledHabitTitle>
        <div className="title-occurrence">
          {occurrenceMap[habit.occurrence]}
        </div>
        <div>{habit.title}</div>
      </StyledHabitTitle>
      <StyledButton>Complete</StyledButton>
    </StyledCard>
  );
}

HabitItem.propTypes = {};

export default HabitItem;
