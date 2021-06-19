import React, { useEffect, useState } from 'react';

import { useTheme } from '../../contexts/theme';

import darkTheme from '../../styles/themes/dark';

import lightTheme from '../../styles/themes/light';

import { StyledNightDayToggle } from './style';

const NightDayToggle = () => {
    const [isLight, setIsLight] = useState(false);

    const { setTheme } = useTheme();

    const onToggleClicked = () => {
        setIsLight(!isLight);
    };

    useEffect(() => {
        setTheme(isLight ? lightTheme : darkTheme);
    }, [isLight, setTheme]);

    return (
        <div style={{ position: 'relative', width: 44, height: 24 }}>
            <StyledNightDayToggle
                className={`${
                    isLight && 'toggle-container-day'
                } toggle-container`}
                onClick={onToggleClicked}
            >
                <div
                    className={`${
                        isLight && 'toggle-handle-day'
                    } toggle-handle`}
                >
                    <div
                        className={`${
                            isLight && 'crater-day'
                        } crater crater-one`}
                    />

                    <div
                        className={`${
                            isLight && 'crater-day'
                        } crater crater-two`}
                    />

                    <div
                        className={`${
                            isLight && 'crater-day'
                        } crater crater-three`}
                    />
                </div>

                <img
                    className={`${isLight && 'cloud-day'} mini-cloud`}
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/480623/toggle_cloud.png"
                    alt=""
                />

                <div
                    className={`star ${
                        isLight && 'star-day'
                    } star-medium star-one`}
                />

                <div
                    className={`star ${
                        isLight && 'star-day'
                    } star-large star-two`}
                />

                <div
                    className={`star ${
                        isLight && 'star-day'
                    } star-small star-three`}
                />

                <div
                    className={`star ${
                        isLight && 'star-day'
                    } star-small star-four`}
                />

                <div
                    className={`star ${
                        isLight && 'star-day'
                    } star-medium star-five`}
                />

                <div
                    className={`star ${
                        isLight && 'star-day'
                    } star-large star-six`}
                />

                <div
                    className={`star ${
                        isLight && 'star-day'
                    } star-medium star-seven`}
                />
            </StyledNightDayToggle>
        </div>
    );
};

export default NightDayToggle;
