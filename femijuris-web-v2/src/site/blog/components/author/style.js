import styled from 'styled-components'

export const Avatar = styled.div`
    position: relative;
    width: 80px;
    height: 80px;
    overflow: hidden;
    background: #dfcbc4;
    -webkit-border-radius: 50%;
    border-radius: 50%;
`

export const NameInitials = styled.span`
    position: absolute;
    top: 25px;
    width: 100%;
    height: 32px;
    font-family: Cinzel;
    font-size: 24px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 0.8px;
    text-align: center;
    color: #ffffff;
`

export const AuthorName = styled.p`
    width: 100%;
    height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 5px;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: 0.3px;
    color: #a07b4e;
    margin-bottom: 10px;
`
export const AuthorDescription = styled.p`
    width: 100%;
    height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.43;
    letter-spacing: normal;
    color: #55585a;
`