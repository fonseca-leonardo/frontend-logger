import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import routes from '../../constants/routes';
import MenuItem from '../MenuItem';

import { StyledCard } from './styles';

export default function Menu() {
    const { t } = useTranslation();
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setInnerWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (innerWidth > 1024) {
        return (
            <StyledCard>
                <ul>
                    {routes.private.map((el) => (
                        <MenuItem
                            route={el.route}
                            title={t(el.title)}
                            key={el.route}
                            Icon={el.Icon}
                        />
                    ))}
                </ul>
            </StyledCard>
        );
    }
    return <></>;
}
