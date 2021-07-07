import React from 'react';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import { AuthProvider } from './auth';
import reducers from '../redux/reducers';
import { SelectedProjectProvider } from './selectedProject';
import { LoadingPageProvider } from './loadingPage';

export const store = createStore(combineReducers({ app: reducers }));

const AppProvider: React.FC = ({ children }) => (
    <Provider store={store}>
        <AuthProvider>
            <SnackbarProvider>
                <SelectedProjectProvider>
                    <LoadingPageProvider>{children}</LoadingPageProvider>
                </SelectedProjectProvider>
            </SnackbarProvider>
        </AuthProvider>
    </Provider>
);

export default AppProvider;
