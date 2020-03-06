import styled from 'styled-components'
import {Container} from 'reactstrap'

export const DirectoryRoot = styled.div`
    background-color: #faf8f7;
`

export const LawyerListContainer = styled(Container)`
  margin-top: 90px
`

export const DirectoryTitle = styled.h1`
  margin-left: 115px;
`

export const SuccessMsgToLawyer = styled.p`
    position: fixed;
    z-index: 10000;
    width: auto;
    background: darkseagreen;
    padding: 12px;
    font-size: 16px;
    font-weight: 300;
    color: white;
`