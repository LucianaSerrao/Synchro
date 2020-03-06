import styled from "styled-components";
import forum from "../../../../common/images/forum.png"
import {Button} from 'reactstrap'

export const Div = styled.div`
  min-height: 540px;
  margin-left: 33px;
  margin-top: 100px;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${forum});
`;

export const H1 = styled.h1`
  font-size: 40px;
  font-weight: lighter;
  font-family: Montserrat;
  margin-bottom: 30px;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: #55585a;
`;

export const ButtonDiv = styled.div`
  
`;

export const CallToActionA = styled(Button)`
  border-radius: 0 !important;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 100;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.71;
  letter-spacing: 2px;
  text-align: center;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #231f20;
  
  margin-left: ${ props => (props.isRight) ? '22px' : '0px' };
`;

export const CallToActionB = styled(Button)`
  border-radius: 0 !important;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.71;
  letter-spacing: 2px;
  text-align: center;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: transparent;
  color: #231f20;
  
  margin-left: ${ props => (props.isRight) ? '22px' : '0px' };
`;

export const Bold = styled.span`
  font-weight: bold;
`;