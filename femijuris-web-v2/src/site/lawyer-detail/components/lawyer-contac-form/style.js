import styled from 'styled-components';
import { Input, Button } from 'reactstrap';

export const InputForm = styled(Input)`
  border-radius: 3px;
  background-color: #f4f4f4;
  border: none;
  margin: 10px 0;
  height: ${ props => props.height || 'auto'};
  &::placeholder {
    font-family: 'Montserrat', sans-serif;
    text-transform: lowercase !important;
    line-height: 1.71;
    font-size: 12px;
    color: #55585a;
    opacity: 0.6;
  }
`;

export const ButtonForm = styled(Button)`
  background-color: #55585a;
  color: #eae3dd99;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
  border-radius: 0;
  padding: 10px 0;
`;

