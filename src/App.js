import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import theme, { GlobalStyle, PageStyle } from './styles/theme';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PageStyle>
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/register" component={Register} />
        </Router>
      </PageStyle>
    </ThemeProvider>
  );
}

export default App;
