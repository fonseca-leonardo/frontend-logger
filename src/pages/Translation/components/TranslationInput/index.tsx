/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import TextInput from '../../../../components/TextInput';

interface Props {
    value?: string | null;

    field?: string;

    name: string;

    onChange(_: React.ChangeEvent<any>): void;
}

const TranslationInput: React.FC<Props> = ({
    value,
    field,
    name,
    onChange,
}) => {
    return value !== null && value !== undefined ? (
        <div style={{ marginTop: 12 }}>
            <label>{field}</label>
            <TextInput value={value} name={name} error="" onChange={onChange} />
        </div>
    ) : (
        <></>
    );
};

export default TranslationInput;
