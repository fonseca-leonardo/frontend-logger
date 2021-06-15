import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './i18n';

import { ThemeContextProvider } from './contexts/theme';
import GlobalStyle from "../src/styles/global";
import { darkTheme } from "../src/styles/themes/dark";
import AppProvider from './hooks/AppProvider';
import AppRoutes from './routes';
import Topbar from './components/Topbar';


function App() {
  return (
    <ThemeContextProvider initialTheme={darkTheme}>
      <GlobalStyle />
      <AppProvider>
        <Topbar>
          <Router>
            <AppRoutes />
          </Router>
        </Topbar>
      </AppProvider>
    </ThemeContextProvider>
  );
}

export default App;
