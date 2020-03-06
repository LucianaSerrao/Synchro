import styled from 'styled-components';
import {Col, Container, Row} from 'reactstrap'
import {Header} from "./style"

export const RowLPHeader = styled(Row)`
  ${Header};
  border-bottom: 1px solid;
`

export const RowLPTeaserOuter = styled(Row)`
  background-image: url(${props => props.bg});
  background-position: center;
  background-size: cover;
`

export const RowLPTeaser = styled(Row)`
    padding-bottom: 80px;
    min-height: 600px;
`

export const H1TeaserTitle = styled.h1`
  text-transform: uppercase;
  font-size: ${props => props.size}px;
  margin-bottom: 0px;
  font-weight: bold;
`
export const H2TeaserSubTitle = styled.h2`
  font-size: ${props => props.size}px;
`

export const PTeaserActionText = styled.p`
  text-transform: uppercase;
  font-size: ${props => props.size}px;
  margin-bottom: 0px;
`

export const DivActionContainer = styled.div`
  margin-top: 70px;
`

export const ColTeaserDesktop = styled(Col)`
  margin-top: 60px;
  font-family: 'PT Sans', sans-serif;
  color: rgb(87,88,90);
`

export const ColTeaserTitleMobile = styled(Col)`
  margin-top: 25px;
  font-family: 'PT Sans', sans-serif;
  color: rgb(87,88,90);
`

export const ContainerLPTeaser = styled(Container)`
    
`
