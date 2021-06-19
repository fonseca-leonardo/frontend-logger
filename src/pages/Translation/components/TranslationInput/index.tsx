/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import TextInput from '../../../../components/TextInput';

interface Props {
    value?: string | null;

    field?: string;
}

const TranslationInput: React.FC<Props> = ({ value, field }) => {
    const [text, setText] = useState(value);

    return text !== null && text !== undefined ? (
        <div style={{ marginTop: 12 }}>
            <label>{field}</label>
            <TextInput
                value={text}
                error=""
                onChange={(e) => setText(e.target.value)}
            />
        </div>
    ) : (
        <></>
    );
};

export default TranslationInput;
