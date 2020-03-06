import styled from "styled-components";
import { Container, Navbar } from "reactstrap";

export const SContainer = styled(Container)`
  min-height: 60px;
  z-index: 999999;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
  background-color: white;
`;

export const WrapNav = styled(Navbar)`
  max-width: 1500px;
  margin: 0 auto;
  background-color: white;
  box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);
`;