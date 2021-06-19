import React from 'react';

import { useTranslation } from 'react-i18next';

import Select from 'react-select';

import Flag from 'react-flagkit';

import { CSSObject } from 'styled-components';

import { useTheme } from '../../contexts/theme';

import NightDayToggle from '../nightDayToggle';

import { Container } from './styles';

const Topbar: React.FC = ({ children }) => {
    const { i18n } = useTranslation();

    const { theme } = useTheme();

    const languagesKeysValues: { [x: string]: { value: string; label: any } } =
        {
            'pt-BR': {
                value: 'pt-BR',

                label: <Flag country="BR" />,
            },

            en: {
                value: 'en',

                label: <Flag country="US" />,
            },
        };

    const languages = [
        {
            value: 'pt-BR',

            label: <Flag country="BR" />,
        },
        {
            value: 'en',

            label: <Flag country="US" />,
        },
    ];

    const customStyles = {
        option: (provided: CSSObject) => ({
            ...provided,

            color: 'black',

            background: 'transparent',

            border: 'none !important',
        }),

        singleValue: (provided: CSSObject) => ({
            ...provided,

            display: 'flex',
        }),

        control: (provided: CSSObject) => ({
            ...provided,

            color: 'black',

            background: 'transparent',

            border: 'none',

            borderColor: theme.optionColor,

            boxShadow: theme.optionColor,

            outline: 'none',

            ':hover': {
                borderColor: theme.optionColor,

                boxShadow: theme.optionColor,
            },

            width: 50,
        }),

        menu: (provided: CSSObject) => ({
            ...provided,

            color: 'black',

            background: theme.optionColor,

            top: 30,

            border: 'none',
        }),

        valueContainer: (provided: CSSObject) => ({
            ...provided,

            color: 'black',

            background: 'transparent',

            outline: 'none',
        }),

        indicatorSeparator: (provided: CSSObject) => ({
            ...provided,

            display: 'none',
        }),

        indicatorsContainer: (provided: CSSObject) => ({
            ...provided,

            display: 'none',
        }),
    };

    return (
        <>
            <Container>
                <h1>Logger</h1>

                <div>
                    <Select
                        defaultValue={
                            languagesKeysValues[
                                document.documentElement.lang || 'pt-BR'
                            ]
                        }
                        options={languages}
                        styles={customStyles}
                        onChange={(e) => i18n.changeLanguage(e?.value || 'en')}
                    />

                    <NightDayToggle />
                </div>
            </Container>

            {children}
        </>
    );
};

export default Topbar;
