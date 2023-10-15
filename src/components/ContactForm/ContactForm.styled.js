import styled from 'styled-components';
import { Field, ErrorMessage, Form } from 'formik';

export const StyledForm = styled(Form)`
  border-color: white;
  border-style: solid;
  border: 1px solid white;
  border-radius: 10%;

  width: 400px;
  padding: 20px;
  margin: 30px auto;
`;

export const FormDiv = styled.label`
  display: flex;
  justify-content: center;
  flex-direction: column;

  align-items: center;

  gap: 8px;
  width: 200px;
  margin: 0 auto;
  margin-bottom: 30px;

  &:first-of-type {
    margin-bottom: 15px;
  }
`;

export const Label = styled.label`
  width: 177px;
  font-size: 20px;
  letter-spacing: 22px;
  outline: none;

  &.firstLabel {
    transform: translate(10px, 0px);
  }
`;

export const FormField = styled(Field)`
  outline: none;
  background-color: inherit;
  border-style: solid;
  border-color: #18191f;
  border-bottom-color: gray;
  text-align: center;
  width: 177px;
  font-size: 10px;
  letter-spacing: 6px;

  margin-top: 12px;

  color: white;

  transition: border-color 0.2s ease-in-out;

  &:focus-visible,
  &:hover {
    border-color: #18191f;
    border-bottom-color: white;
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  color: #e000008f;
  font-size: 12px;
  font-style: italic;
`;

export const StyledButton = styled.button`
  width: 177px;
  height: 30px;
  margin-top: 12px;
  border-style: solid;
  border-color: #18191f;
  background-color: #cecece87;
  color: white;
  font-size: 10px;
  letter-spacing: 11px;
  cursor: pointer;

  transition: background 0.2s ease-in-out;

  &:hover {
    background-color: #cecece20;

    box-shadow: inset 0 0 2px grba(255, 255, 255, 0.05),
      inset 4px 4px 6px rgba(0, 0, 0, 0.2);
    color: yellow;
    text-shadow: 0 0 15px yellow, 0 0 25px yellow;
    animation: glow 1.5s linear infinite;
    transition: all 0.1s ease;
  }
`;
