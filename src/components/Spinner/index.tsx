import React from 'react';
import Loader from 'react-loader-spinner';
import { useTheme } from '../../contexts/theme';



export default function Spinner() {
    const { theme } = useTheme();
    return (
        <Loader
            type="Oval"
            color={theme.spinnerColor}
            height={20}
            width={20}

        />
    )
}