import styled from 'styled-components';
import { device } from '../../../common/devices';
import ReactLoading from 'react-loading';
import { Container
       , Row
       , Col
       , NavLink
       , Nav
       , TabPane } from 'reactstrap';

export const CustomReactLoading = styled(ReactLoading)`
  margin: auto;
`
export const Background = styled.div`
  background-color: #f4f4f4;
`;

export const RowNoPadding = styled(Row)`
  padding: 0;
  margin: 0;
`
export const ColNoPadding = styled(Col)`
  padding: 0;
  margin: 0;
`

export const WrapContent = styled.section`
  max-width: 1500px;
  margin: auto;
`;

export const ContentBox = styled.div`
  margin: 20px 0 0 0;
  &.lawyer-actions {
    overflow-y: auto;
    max-height: 100vh;
  }
`;



export const WrapBox = styled.div`
  padding: 30px;
  margin: 5px 0px 5px 5px;
  border-radius: 3px;
  background-color: #ffffff;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
  &.lawyer-actions {
    height: calc(100% - 10px);
  }
  @media ${ device.mobile }{
    display: none;
  }
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

export const MobileTabs = styled(Nav)`
    margin: 0 10px;
    padding: 15px 0px 0px 0px;
    display: flex;
    justify-content: space-between;
    border: none;
`;

export const MobileTabPane = styled(TabPane)`
    padding: 0 15px 20px 15px!important;
`;

export const MobileTabLink = styled(NavLink)`
  border:none;
  padding: .2rem .05rem;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  font-size: 12px;
  color: #9b9b9b!important;
  cursor:pointer;
  &:active, &:hover {
    border:none;
  }
  &.active{
    color: #a17b4a!important;
    border:none;
    border-bottom: 1px #a17b4a solid!important;
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