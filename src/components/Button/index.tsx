import React from 'react'
import Spinner from '../Spinner';

import {StyledButton} from './styles';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    isLoading?: boolean;
}

const Button: React.FC<Props> = ({isLoading, children, ...rest}) => {
    return (
        <StyledButton disabled={isLoading} {...rest}>
            {
                isLoading ? <Spinner /> : (children)
            }
        </StyledButton>
    )
}

export default Button;