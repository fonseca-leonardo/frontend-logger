import React from 'react';
import { IconType } from 'react-icons';
import { Link, useHistory } from 'react-router-dom';
import { useTheme } from '../../contexts/theme';

import { StyledContainer } from './styles';

interface Props {
    route: string;
    title: string;
    Icon: IconType;
}

const MenuItem: React.FC<Props> = ({ route, title, Icon }) => {
    const history = useHistory();
    const { theme } = useTheme();

    return (
        <li>
            <Link style={{ textDecoration: 'none' }} to={route}>
                <StyledContainer
                    isCurrentPage={history.location.pathname === route}
                    theme={theme}
                >
                    <Icon style={{ width: 22, height: 22 }} />
                    <span>{title}</span>
                </StyledContainer>
            </Link>
        </li>
    );
};

export default MenuItem;
