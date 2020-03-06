import styled from "styled-components";
import {Container, Row, Col} from "reactstrap";

export const SContainer = styled(Container)`
    background-color: #231f20;
    min-height: 336px;
    padding: 60px 0 0 0;

`;

export const Image = styled.img`
	max-height: 32px;
    object-fit: contain;

`;

export const RowWithMargin = styled(Row)`
    margin-bottom: ${props => props.rowMarginBottom || "0px"};
    margin-top: ${props => props.rowMarginTop || "0px"};
    margin-left: ${props => props.rowMarginLeft || "0px"};
    margin-right: ${props => props.rowMarginRight || "0px"};

`;

export const ColWithMargin = styled(Col)`
    margin-bottom: ${props => props.colMarginBottom || "0px"};
    margin-top: ${props => props.colMarginTop || "19px"};
    margin-left: ${props => props.colMarginLeft || "0px"};
    margin-right: ${props => props.colMarginRight || "0px"};

`;

export const Social = styled.img`
    padding: 0 0 0  ${props => props.inputLeftPadding || "20px"};


`;

export const Titles = styled.h1`
    max-height: 15px;
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 1px;
    color: #eae3dd;
`;

export const Subtitles = styled.p`
    margin: 15px 0 10px 0;
    max-height: 15px;
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 1px;
    color: #be9a69;
    max- height: 40px;

`;

export const Other = styled.p`
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.67;
  letter-spacing: 1px;
  color: #eae3dd;

`;

export const Search = styled.input`
    width: 230px;
    height: 40px;
    background-color: #f4f4f4;
    font-size: 12px;
    color:#55585a;
    font-family: Montserrat;
    line-height: 1.67;
`;

export const Button = styled.button`
    width: 100px;
    height: 40px;
    border: 1px solid #a17b4a;
    border-radius: 0;
    background-color: transparent;
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 1px;
    color: #a17b4a;
    margin-left: 10px;


`;