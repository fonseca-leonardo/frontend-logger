import styled from "styled-components";
import { Field } from 'formik';

export const ErrorMessage = styled.span`
  color: red;
  margin-top: 4px;
`;

export const StyledInput = styled(Field)`
  border: none;
  font-family: Nunito;
  font-weight: 500;
  font-size: 16px;
  padding: 10px;
  outline: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.input.color};
  box-shadow: ${({ theme }) => theme.input.boxShadow};
  background: inherit;
  transition: 0.5s ease all;
`;
