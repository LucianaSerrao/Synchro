import styled from 'styled-components';
import { device } from '../../../../common/devices';

export const ProfileImageElement = styled.img`
  width: 100%;
  border-radius: 100%;
`
export const WrapImage = styled.div`
  border: 2px solid white;
  border-radius: 100%;
  width: 130px;
  height: 130px;
  margin: auto;

  @media ${ device.mobile } {
    width: 100px;
    height: 100px;
  }
`
