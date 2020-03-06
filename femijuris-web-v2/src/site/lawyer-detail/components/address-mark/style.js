import styled from 'styled-components';
import imgrMark from "../../../../common/images/icon/ic-escritorio.svg";

export const CircularMark = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 60px;
  margin-left: -12px;
  margin-top: 0px;
  background-color: #55585a;
  border: 0px solid #55585a;
  background-image:url(${imgrMark});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const AddressBox = styled.div`
    padding: 15px 10px;
    background-color: white;
    box-shadow: 0 3px 6px rgba(0,0,0,0.016), 0 3px 6px rgba(0,0,0,0.023);

    min-height: 100px;
    max-width: 260px;
    min-width: 200px;
    position: absolute;
    margin-top: -120px;
    margin-left: -100px;

    &:after {
      content: '';
      position: absolute;
      border: 1px solid rgba(51, 51, 51, 0.19);
      border-color: white transparent;
      border-width: 12px 13px 0 13px;
      bottom: -12px;
      left: 45%;
    }

    label {
      font-family: 'Montserrat', sans-serif;
      font-weight: 500;
      font-size: 14px;
      color: #55585a;
    }

    p {
      font-family: 'Montserrat', sans-serif;
      font-size: 12px;
      color: #55585a;
    }

`;

