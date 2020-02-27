import styled from 'styled-components';

export const StyledFormCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 375px;
  padding: 20px;
  margin: auto;

  .title {
    font-size: ${props => props.theme.font_2xl};
    color: ${props => props.theme.indigo900};
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  .form-item {
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    label {
      font-weight: bold;
      font-size: ${props => props.theme.font_sm};
      color: ${props => props.theme.gray800};
    }

    input {
      box-shadow: ${props => props.theme.shadow_base};
      border: 1px solid ${props => props.theme.gray200};
      border-radius: 4px;

      font-size: ${props => props.theme.font_base};
      padding: 10px;
    }
  }

  button {
    margin-top: 20px;
  }
`;

export const StyledErrorMessage = styled.div`
  background: ${props => props.theme.red100};
  color: ${props => props.theme.red500};
  margin-top: 20px;
  padding: 10px;
  border: 1px solid ${props => props.theme.red400};
  border-radius: 4px;

  line-height: 1rem;
`;

export const StyledButton = styled.button`
  background: ${props => props.theme.indigo600};
  color: ${props => props.theme.indigo100};

  &:hover,
  &:active {
    background: ${props => props.theme.indigo700};
  }

  padding: 10px;
  border-radius: 5px;
`;

export const StyledButtonLink = styled.a`
  cursor: pointer;
  font-size: ${props => props.theme.font_base};
  color: ${props => props.theme.gray700};
  margin-top: 10px;
  text-align: center;
  text-decoration: underline;
`;
