import styled from "styled-components";
import { Container } from "reactstrap";

export const WrapContainer = styled(Container)`
  max-width: 1500px;
  margin: 0 auto;
  background-color: white;
  padding-top: 100px;
  margin-bottom: 50px;
`;

export const Title =  styled.h2`
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.67;
  letter-spacing: normal;
  text-align: center;
  color: #55585a;
  margin-bottom: 28px;
`

export const Text = styled.p`
  font-family: Montserrat;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.88;
  letter-spacing: normal;
  text-align: center;
  color: #55585a;
  margin-bottom: 60px;
`
export const Link = styled.a`
  color: #a17b4a;
  &:hover {
    color: #a17b4a;  
  }
`