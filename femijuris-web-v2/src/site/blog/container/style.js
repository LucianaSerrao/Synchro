import styled from "styled-components";
import { Container, Nav, NavLink } from "reactstrap";

export const Border = styled(Container)`
  padding-top:10px;
  padding-left: 10px;
  padding-right:10px;
  background-color: #dfcbc3;

 `;

 export const WhiteBorder = styled(Container)`
     background-color: #ffffff;

 `;
export const SContainer = styled(Container)`
        padding-top: 40px;
`;

export const PWithMargin = styled.p`
  max-height: 20px;
  font-family: Montserrat-Light;
  font-size: 14px;
  font-style: normal;
  font-stretch: normal;
  font-weight: 300;
  line-height: 1.43;
  letter-spacing: normal;
  color: #55585a;
  margin-left:30px;
  margin-top: 89px;
  margin-bottom: 10px;
`;

export const WrapContainer = styled(Container)`
  margin: 0 auto;
  padding-top: 100px;

`;

export const SectionTitle = styled.h2`
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 1px;
  color: #231f20;
  text-transform: uppercase;
  margin-bottom: 30px;
`

export const Article = styled.article`
  font-family: Montserrat;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.75;
  letter-spacing: normal;
  color: #231f20;
`

export const ArticleTitle = styled.h1`
  font-family: Cinzel;
  font-size: 32px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: 1px;
  color: #231f20;
`

export const MobileTabs = styled(Nav)`
    margin: -40px 10px 30px 10px;
    display: flex;
    justify-content: center;
    border: none;
`;

export const MobileTabLink = styled(NavLink)`
  border:none !important;
  padding: 10px 20px;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  font-size: 12px;
  color: #9b9b9b!important;
  cursor:pointer;
  text-decoration: none;
  &.active{
    color: #a17b4a !important;
  }
`;

export const Icon = styled.img`
    width: 20px;
    height: 20px;
    object-fit: contain;
`;

export const Rectangle = styled(Container)`
  width: 1096px;
  height: 1px;
  border-radius: 3px;
  background-color: #cccccc;
  margin-left: 60px;
`;

export const Frase = styled.p `
      font-family: Montserrat;
      font-size: 14px;
      font-weight: 300;
      line-height: 1.43;
      color: #55585a;
      margin: 149px 0px 10px 60px;
`;


