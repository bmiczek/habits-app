import styled, { createGlobalStyle } from 'styled-components';

export default {
  black: '#000000',
  white: '#FFFFFF',

  gray100: '#F7FAFC',
  gray200: '#EDF2F7',
  gray300: '#E2E8F0',
  gray400: '#CBD5E0',
  gray500: '#A0AEC0',
  gray600: '#718096',
  gray700: '#4A5568',
  gray800: '#2D3748',
  gray900: '#1A202C',

  indigo100: '#EBF4FF',
  indigo200: '#C3DAFE',
  indigo300: '#A3BFFA',
  indigo400: '#7F9CF5',
  indigo500: '#667EEA',
  indigo600: '#5A67D8',
  indigo700: '#4C51BF',
  indigo800: '#434190',
  indigo900: '#3C366B',

  red100: '#FFF5F5',
  red200: '#FED7D7',
  red300: '#FEB2B2',
  red400: '#FC8181',
  red500: '#F56565',
  red600: '#E53E3E',
  red700: '#C53030',
  red800: '#9B2C2C',
  red900: '#742A2A',

  maxWidth: '1000px',

  font_xs: '.75rem',
  font_sm: '.875rem',
  font_base: '1rem',
  font_lg: '1.125rem',
  font_xl: '1.25rem',
  font_2xl: '1.875rem',
  font_3xl: '2.25rem',
  font_4xl: '3rem',
  font_6xl: '4rem',

  shadow_base:
    '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)',
  shadow_md: '0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.06)',
  shadow_lg:
    '0px 4px 6px rgba(0, 0, 0, 0.05), 0px 10px 15px rgba(0, 0, 0, 0.1)',
  shadow_xl:
    '0px 10px 10px rgba(0, 0, 0, 0.04), 0px 20px 25px rgba(0, 0, 0, 0.1)',
  shadow_2xl: '0px 25px 50px rgba(0, 0, 0, 0.25)',
  shadow_inner: 'inset 0px 2px 4px rgba(0, 0, 0, 0.06)',
};

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    /* font-size: 10px; */
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    color: ${props => props.theme.gray800};

    font-size: 1rem;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  button {
    cursor: pointer;
    font-size: ${props => props.theme.font_base};
    border: none;
    border-radius: 10px;

    padding: 8px 16px 8px 16px;

    box-shadow: ${props => props.theme.shadow_md};

    &:active {
      box-shadow: ${props => props.theme.shadow_inner};
      transform: translateY(1px);
    }

    &:focus {
      outline: none;
    }
  }
`;

export const PageStyle = styled.div`
  max-width: ${props => props.theme.maxWidth};
  min-height: 100vh;
  margin: 0 auto;
  padding: 2rem;
`;
