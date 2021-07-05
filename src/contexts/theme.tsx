/* eslint-disable react/prop-types */
import React, {
    createContext,
    useContext,
    useEffect,
    useRef,
    useState,
} from 'react';

import { ThemeProvider } from 'styled-components';
import { LocalStorageKeys } from '../constants';

import ITheme from '../interfaces/ITheme';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

interface ThemeHook {
    theme: ITheme;

    setTheme: (_: ITheme) => void;
}

const ThemeContext = createContext<ThemeHook>({} as ThemeHook);

const useTheme = () => {
    const context = useContext<ThemeHook>(ThemeContext);

    if (!context)
        throw new Error('useThemes must be use within a ThemeProvider');

    return context;
};

interface ThemeProviderProps {}

const ThemeContextProvider: React.FC<ThemeProviderProps> = (props) => {
    const { children } = props;

    const themeContainerRef = useRef<HTMLDivElement>(null);

    const [theme, setTheme] = useState<ITheme>(() => {
        const storageTheme = window.localStorage.getItem(
            LocalStorageKeys.THEME,
        );
        if (storageTheme === 'dark') {
            return dark;
        }
        if (storageTheme === 'light') {
            return light;
        }
        return dark;
    });

    const [currentTheme, setCurrentTheme] = useState(() => {
        const storageTheme = window.localStorage.getItem(
            LocalStorageKeys.THEME,
        );
        if (storageTheme === 'dark') {
            return dark;
        }
        if (storageTheme === 'light') {
            return light;
        }
        return dark;
    });

    useEffect(() => {
        window.localStorage.setItem(LocalStorageKeys.THEME, theme.name);

        const prevTheme = document.getElementsByClassName('theme-animation');

        const themeAnimation = document.createElement('div');

        themeAnimation.classList.add('theme-animation');

        themeAnimation.style.background = theme.background;

        if (themeContainerRef.current) {
            themeContainerRef.current.append(themeAnimation);
        }

        setTimeout(() => {
            themeAnimation.style.clipPath = 'circle(100%)';
            setTimeout(() => setCurrentTheme(theme), 150);
        }, 100);

        setTimeout(() => {
            if (prevTheme.length > 2) {
                if (prevTheme[1]) {
                    prevTheme[1].remove();
                }
            }
        }, 1000);
    }, [theme]);

    return (
        <ThemeProvider theme={currentTheme}>
            <ThemeContext.Provider value={{ theme: currentTheme, setTheme }}>
                <div ref={themeContainerRef}>
                    <div
                        className="theme-animation"
                        style={{
                            clipPath: 'circle(100%)',

                            background: currentTheme.background,
                        }}
                    />
                </div>

                {children}
            </ThemeContext.Provider>
        </ThemeProvider>
    );
};

export { ThemeContextProvider, useTheme };
