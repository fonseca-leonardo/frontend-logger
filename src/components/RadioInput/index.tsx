import React from 'react';

import {
    Radio,
    RadioControl,
    RadioInput as Input,
    RadioLabel,
    StyledField,
} from './styles';

interface Props {
    onChange(_: any): void;
    isChecked: boolean;
    name?: string;
    label: string;
    value?: any;
}

const RadioInput: React.FC<Props> = ({
    isChecked,
    name,
    label,
    value,
    onChange,
}) => {
    return (
        <Radio htmlFor="" onClick={() => onChange(!isChecked)}>
            <Input>
                <StyledField type="radio" name={name} value={value} />
                <RadioControl selected={isChecked} />
            </Input>
            <RadioLabel>{label}</RadioLabel>
        </Radio>
    );
};

export default RadioInput;
