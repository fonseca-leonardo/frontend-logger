import React, { CSSProperties } from "react";

import { StyledInput, ErrorMessage } from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  style?: CSSProperties;
  placeholder?: string;
  width?: number | string;
  error: string | undefined;
}

const TextInput: React.FC<InputProps> = ({
  style,
  placeholder,
  width,
  error,
  ...rest
}) => {
  return (
    <div style={{ position: "relative", width }}>
      <StyledInput
        style={{ ...style, width, paddingLeft: 4 }}
        placeholder={placeholder}
        {...rest}
      />
      {
        error && (
          <ErrorMessage>{error}</ErrorMessage>
        )
      }
    </div>
  );
};

export default TextInput;
