import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './i18n';

import { ThemeContextProvider } from './contexts/theme';
import GlobalStyle from './styles/global';

import AppProvider from './hooks/AppProvider';
import AppRoutes from './routes';
import Topbar from './components/Topbar';
import Notifier from './hooks/Notifier';

function App() {
    return (
        <ThemeContextProvider>
            <GlobalStyle />
            <AppProvider>
                <Notifier />
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
