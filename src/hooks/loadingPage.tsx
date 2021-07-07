import React, { createContext, useState, useContext } from 'react';
import LoadingPage from '../components/LoadingPage';

interface LoadingPageContextData {
    isLoading: boolean;

    setLoading(_: boolean): void;
}

const LoadingPageContext = createContext<LoadingPageContextData>(
    {} as LoadingPageContextData,
);

const LoadingPageProvider: React.FC = ({ children }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const setLoading = (state: boolean) => {
        setIsLoading(state);
    };

    return (
        <LoadingPageContext.Provider value={{ isLoading, setLoading }}>
            <LoadingPage isLoading={isLoading} />
            {children}
        </LoadingPageContext.Provider>
    );
};

function useLoading(): LoadingPageContextData {
    const context = useContext(LoadingPageContext);

    if (!context) {
        throw new Error('useLoading must be used within an LoadinPageProvider');
    }

    return context;
}

export { LoadingPageProvider, useLoading };
