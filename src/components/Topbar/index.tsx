import React from 'react';
import { useTranslation } from 'react-i18next';
import Select from 'react-select'; 
import { CSSObject } from 'styled-components';
import { useTheme } from '../../contexts/theme';

import NightDayToggle from '../nightDayToggle';

import { Container } from './styles';

const Topbar: React.FC = ({ children }) => {
    const { i18n } = useTranslation();
    const { theme } = useTheme();

    const languages = [{
        value: 'pt-BR',
        label: '🇧🇷',
    }, {
        value: 'en',
        label: '🇺🇸'
    }];

    const customStyles = {
        option: (provided: CSSObject) => ({
            ...provided,
            color: 'black',
            background: 'transparent',
            border: 'none !important',


        }),
        control: (provided:CSSObject) => ({
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
            width: 40,

        }),
        menu: (provided:CSSObject) => ({
            ...provided,
            color: 'black',
            background: theme.optionColor,
            top: 30,
            border: 'none',
  
          }),
        valueContainer: (provided:CSSObject) => ({
            ...provided,
            color: 'black',
            background: 'transparent',

            outline: 'none',
        }),
        indicatorSeparator: (provided:CSSObject) => ({
            ...provided,
            display: 'none'
        }),
        indicatorsContainer: (provided:CSSObject) => ({
            ...provided,
            display: 'none'
        }),
      }

    return (
        <>
            <Container>
                <h1>Logger</h1>
                <div>
                    <Select
                        defaultValue={languages[1]}
                        options={languages}
                        styles={customStyles}
                        onChange={(e) => i18n.changeLanguage(e?.value || 'en')}>
                    </Select>
                    <NightDayToggle />
                </div>
            </Container>
            {children}
        </>
    )
}

export default Topbar;
