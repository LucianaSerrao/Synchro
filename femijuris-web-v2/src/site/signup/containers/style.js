import styled from 'styled-components';
import { device } from '../../../common/devices';
import ReactLoading from 'react-loading';
import ImageUploader from 'react-images-upload';
import ChipInput from 'material-ui-chip-input';
import cloudBg from "../../../common/images/nuvens.svg";
import mainBg from "../../../common/images/gradient-bg.svg";
import { Container
       , Row
       , Col
       , Input
       , Button } from 'reactstrap';
import MaskedInput from "react-text-mask"
import AsyncSelect from "react-select/lib/Async";

export const CustomReactLoading = styled(ReactLoading)`
  margin: auto;
`
export const Background = styled.div`
  background-color: #f4f4f4;
  background-image: url(${cloudBg}), url(${mainBg});
  background-repeat: no-repeat,repeat;
  background-position: top,top;
`;

export const RowNoPadding = styled(Row)`
  padding: 0;
  margin: 0;
`
export const ColNoPadding = styled(Col)`
  padding: 0;
  margin: 0;
`

export const WrapFlex = styled.div`
  display: flex;
`;

export const WrapContent = styled.section`
  max-width: 1500px;
  margin: 60px auto 0 auto;
  display: flex;
  flex-direction:column;
  justify-content: center;
  min-height: 100vh;
`;

export const ContentBox = styled.div`
  margin: 20px 0 0 0;
  &.lawyer-actions {
    overflow-y: auto;
    max-height: 100vh;
  }
`;
export const CustomImageUploader = styled(ImageUploader)`
  margin: 0;
  padding: 0;
  div {
    box-shadow: none !important;
    margin: 0;
    padding: 0;
  }
  button {
    color: #eae3dd99;
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    font-weight: 200;
  }
`;



export const WrapBox = styled.div`
  padding: 10px 30px;
  margin: 0 auto;
  border-radius: 3px;
  background-color: #ffffff;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 1300px;

`

export const WrapProfileInfo = styled(Container)`
  position: relative;
  padding-top: 65px;
`;

export const WrapContact = styled.p`
  @media ${ device.mobile }{
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  margin: auto;
`;
export const WrapTags = styled.p`
  margin: 15px auto;
  text-align: center;
`;

export const WrapMap = styled.div`
  padding: 0px;
  margin: 20px auto auto auto;
`;

export const WrapMobileBox = styled.div`
  background-color: #ffffff;
  @media ${ device.tablet }{
    display: none;
  }
  @media  ${ device.laptop } {
    display: none;
  }
  @media ${ device.desktop }{
    display: none;
  }
`;

export const LawyerDetailImages = {
  icon: {
    mail: styled.img`
      width: 15px;
      margin-right: 8px;
      margin-top: -2px;
    `,
    phone: styled.img`
      width: 11px;
      margin-right: 8px;
      margin-top: -1px;
    `,
  }

}

export const SocialIcon = styled.img`
    width: 20px;
    margin-right: 5px;
`;

export const InputForm = styled(Input)` 
  border-radius: 3px;
  background-color: #f4f4f4;
  border: none;
  margin: 10px 0;
  height: ${ props => props.height || 'auto'};
  &::placeholder {
    font-family: 'Montserrat', sans-serif;
    line-height: 1.71;
    font-size: 12px;
    color: #55585a;
    opacity: 0.6;
  }
`;

export const AsyncSelectStyle = styled(AsyncSelect)`
   border-radius: 3px;
  background-color: #f4f4f4;
  border: none;
  margin: 10px 0;
  padding: 10px;
  font-size: 16px;
  line-height: 24px;
  width: ${ props => props.width || 'auto'};
  height: ${ props => props.height || 'auto'};
  &::placeholder {
    font-family: 'Montserrat', sans-serif;
    line-height: 1.71;
    font-size: 12px;
    color: #55585a;
    opacity: 0.6;
  }
`

export const MaskedtInput = styled(MaskedInput)` 
 border-radius: 3px;
  background-color: #f4f4f4;
  border: none;
  margin: 10px 0;
  padding: 10px;
  font-size: 16px;
  line-height: 24px;
  width: ${ props => props.width || 'auto'};
  height: ${ props => props.height || 'auto'};
  &::placeholder {
    font-family: 'Montserrat', sans-serif;
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
  width: 100%;
`;

export const CustomChipInput = styled(ChipInput)`
  width: 100%;
  border-radius: 3px;
  background-color: #f4f4f4;
  border: none!important;
  margin: 10px 0!important;
  padding: 5px 10px!important;
  height: ${ props => props.height || 'auto'};
  div {
    font-family: 'Montserrat', sans-serif;
    line-height: 1.71;
    font-size: 12px;
    color: #55585a;
    &::before, &::after {
      height: 0!important;
    }
  }
`;