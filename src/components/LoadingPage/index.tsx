import React from 'react';
import Spinner from '../Spinner';

import { Container, Backdrop, LoadinContainer } from './styles';

interface Props {
    isLoading: boolean;
}

const LoadingPage: React.FC<Props> = ({ isLoading }) => {
    return isLoading ? (
        <Container>
            <Backdrop />
            <LoadinContainer>
                <Spinner width={40} height={40} />
            </LoadinContainer>
        </Container>
    ) : (
        <></>
    );
};

export default LoadingPage;
