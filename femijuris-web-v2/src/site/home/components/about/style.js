import styled from "styled-components";
import {Container, Col} from "reactstrap";
import cloudBg from "../../../../common/images/clouds-typeb.svg";

export const TitleContainer = styled.div`
  padding-top: 5%;
`;

export const Title = styled.h2`
  height: 40px;
  font-family: Montserrat-Medium;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.67;
  text-align: center;
  color: #55585a;
`;


export const SContainer = styled(Container)`
  background-image: url(${cloudBg});
  min-height: 250px;
`;

export const SubTitle = styled.h1`
  min-width: 930px;
  min-height: 90px;
  font-family: Montserrat;
  font-size: 16px;
  line-height: 1.88;
  text-align: center;
  color: #55585a;
`;

export const BoldSub = styled.text`
        font-weight:600;

`;

export const Image = styled.img`
    height: 200px;
    object-fit: contain;
    margin-top: 80px;
    margin-left:75px;
    margin-right: 75px;
    margin-bottom: 40px;

`;


export const PhotoTitle = styled(Col)`
  height: 30px;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.88;
  text-align: center;
  color: #55585a;
  margin-bottom: 13px;
`;

export const PhotoSub = styled(Col)`
  height: 60px;
  font-family: Montserrat;
  font-size: 16px;
  line-height: 1.88;
  text-align: center;
  color: #55585a;
  margin-bottom: 60px;
`;