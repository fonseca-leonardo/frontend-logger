/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { Container } from './styled';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    text: string;
    selected: boolean;
}

const BookMark: React.FC<Props> = ({ text, selected, ...props }) => (
    <Container selected={selected} {...props}>
        <span>{text}</span>
    </Container>
);

export default BookMark;
