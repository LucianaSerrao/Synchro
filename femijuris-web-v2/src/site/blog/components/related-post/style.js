import styled from 'styled-components'

export const PostTitle = styled.h3`
    width: 100%;
    height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: Cinzel;
    font-size: 16px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.25;
    letter-spacing: normal;
    color: #231f20;
    cursor: pointer;
    &:hover{
        text-decoration:underline;
    }
`
export const PostText = styled.p`
    font-family: Montserrat;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.43;
    letter-spacing: normal;
    color: #55585a;
`

export const PostDescription = styled(PostText)`
    width: 100%;
    max-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const PostCompany = styled(PostText)`
    color: #a07b4e;
`
export const PostImage = styled.img`
    width: 100%;
    height: auto;
    min-height: 280px;
    margin-bottom: 20px
`

export const Icon = styled.img`
    width: 20px;
    height: 20px;
    object-fit: contain;
`

export const Avatar = styled.div`
    position: relative;
    width: 80px;
    height: 80px;
    background-image: linear-gradient(to bottom, #91616d, #231f20);
    overflow: hidden;
    -webkit-border-radius: 50%;
    border-radius: 50%;
`