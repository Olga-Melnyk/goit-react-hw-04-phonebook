import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const ContainerForm = styled(Form)`
  width: 500px;
  margin: 20px auto 20px 10px;
  padding: 20px 10px;
  border: 1px solid black;
`;

export const Label = styled.label`
  display: block;
  font-size: 18px;
  font-weight: 500;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Input = styled(Field)`
  display: block;
  margin: 15px 0 0 15px;
  padding-left: 4px;
  :hover {
    scale: 1.05;
  }
`;

export const ErrorForm = styled(ErrorMessage)`
  margin: 5px 0;
  color: red;
`;

export const FormBtn = styled.button`
  margin: 0 auto;
  padding: 5px 10px;
  border: 1px solid black;
  background-color: transparent;
  font-size: 18px;
  :hover {
    scale: 1.05;
  }
`;
