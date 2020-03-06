import styled from 'styled-components'

export const PostTitle = styled.h3`
    overflow: hidden;
    line-height: 1.2px;
    position: relative;
    text-overflow: ellipsis;
    font-family: Cinzel;
    font-size: 16px;
    font-weight: bold;
    line-height: 1.25;
    color: #231f20;
    cursor: pointer;
    &:hover{
        text-decoration:underline;
    }
    &:before{
        content: '...';
          position: absolute;
          right: 0;
          bottom: 0;
    }
    &:after{
        content: '';
          position: absolute;
          right: 0;
          width: 1em;
          height: 1em;
          margin-top: 0.2em;
          background: white;
    }
`
export const PostText = styled.p`
    overflow: hidden;
    position: relative;
    font-family: Montserrat;
    font-size: 14px;
    line-height: 1.43;
    color: #55585a;
`

export const PostDescription = styled(PostText)`
    overflow: hidden;
    text-overflow: ellipsis;
`

export const PostCompany = styled(PostText)`
    color: #a07b4e;
`
export const PostImage = styled.img`

`

export const Icon = styled.img`
    object-fit: contain;
`