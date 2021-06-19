/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { Container } from './styled';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    text: string;
}

const BookMark: React.FC<Props> = ({ text, ...props }) => (
    <Container {...props}>
        <span>{text}</span>
    </Container>
);

export default BookMark;
