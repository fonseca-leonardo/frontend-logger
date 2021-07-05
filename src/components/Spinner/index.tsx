import React from 'react';

import Loader from 'react-loader-spinner';

import { useTheme } from '../../contexts/theme';

interface Props {
    width?: number;
    height?: number;
}

const Spinner: React.FC<Props> = ({ height, width }) => {
    const { theme } = useTheme();

    return (
        <Loader
            type="Oval"
            color={theme.spinnerColor}
            height={height || 20}
            width={width || 20}
        />
    );
};

export default Spinner;
