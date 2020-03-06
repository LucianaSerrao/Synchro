import styled from 'styled-components'
import {Row,Col} from 'reactstrap'

export const SpecialtiesListDiv = styled.div`
    position: absolute;
    height: 67px;
    overflow: hidden;  
`;

export const LocationSpan = styled.span`
  font-family: Montserrat;
  font-size: 11px;
  margin-right: 5px;
`

export const Icon = styled.i`
  font-size: 10px;
`

export const PhoneSpan = styled.span`
  margin-left: 10px
`

export const Oab = styled.p`
  font-size: 10px;
  margin: 0;
  font-family: Montserrat;
`


export const ProfileContainer = styled(Row)`
  border: 1px solid rgba(0,0,0,0.1);
  padding: 8px;
  margin-bottom: 16px;
  margin-left: -10px !important;
  height: 200px;
  border-radius: 3px;
  background-color: #ffffff;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
`

export const LawyerName = styled.p`
    font-weight: 900;
    font-size: 15px;
    font-family: Montserrat;
    margin: 0;
`


export const LinkSendMessage = styled.a`
  font-size: 10px;
  font-weight: 600
`

export const InfoCol = styled(Col)`
  text-align: left;
  font-size: 12px;
`

export const List = styled.ul`
  list-style: none;
  margin-top: 4px;
  padding: 0;
`
export const ListItem = styled.li`
  display: inline;
  float: left;
  margin-right: 4px;
  background-color: #ffffff;
  margin-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  border: solid 1px #bd996c;
  border-radius: 15px;
  font-family: Montserrat;
  font-size: 10px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: 0.3px;
  color: #a07b4e; 
`