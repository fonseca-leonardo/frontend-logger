import React, { useState, useRef } from 'react';

import { IconBaseProps } from 'react-icons/lib';

import { Container } from './styles';

type IconProps = Omit<IconBaseProps, 'size'> & {
    size: number;
};

interface Props {
    children: React.ReactElement<IconProps>;
    title: string;
    color?: string;
}

const IconButton: React.FC<Props> = ({ children, ...props }) => {
    const ref = useRef<any>(null);

    const [child] = useState<React.ReactElement<IconProps>>(
        React.cloneElement<IconProps>(children),
    );

    return (
        <Container ref={ref} {...props} size={child.props.size}>
            {children}
        </Container>
    );
};

export default IconButton;
