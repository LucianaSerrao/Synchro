import styled from 'styled-components';

const colors = {
    normalText: '#55585a',
    primaryColor: '#be9a69',
    sencondaryColor: '#231f20'
}

// LawyerDetail
export const LawyerDetail = {
    pageTitle: styled.h1`
        font-family: 'Cinzel', serif;
        font-size: 24px;
        color: ${ colors.normalText };
        letter-spacing: 0.3px;
        margin: 25px auto auto auto;
        text-align: center;
    `,
    oabNumber: styled.p`
        margin: auto;
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
        color: ${ colors.normalText };
    `,
    hiddenLink: styled.a`
        color: ${ colors.normalText };
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
        margin: auto 10px;
        &:hover {
            color: ${ colors.normalText };
            cursor: pointer;
            text-decoration: none;
        }
    `,
    sectorTag: styled.label`
    border: solid 1px ${ colors.primaryColor };
    border-radius: 15px;
    color: ${ colors.primaryColor };
    font-family: 'Montserrat', sans-serif;
    font-size: 10px;
    padding: 3px 8px;
    margin: 4px 2px;
    `,
    contentTitle: styled.h2`
        font-family: 'Montserrat', sans-serif;
        color: ${ colors.primaryColor };
        font-size: 18px;
        text-transform: uppercase;
        font-weight: 300;
    `,
    contentLabels: styled.label`
        font-family: 'Montserrat', sans-serif;
        color: ${ colors.sencondaryColor };
        font-size: 16px;
        font-weight: 300;
    `,
    contentTextList: styled.ul`
        margin: 0;
        color: ${ colors.normalText };
        font-family: 'Montserrat', sans-serif;
        line-height: 1.71;
        font-size: 14px;
        list-style: none;
        display: flex;
        margin: 0;
        padding: 0;
        li {
            margin: 0 5px;
        }
    `,
    contentText: styled.p`
        margin: 0;
        color: ${ colors.normalText };
        font-family: 'Montserrat', sans-serif;
        line-height: 1.71;
        font-size: 14px;
        text-align: justify;
        text-justify: inter-word;
    `,
    contactText: styled.a`
        margin: 0 0 8px 0;
        color: ${ colors.normalText };
        font-family: 'Montserrat', sans-serif;
        line-height: 1.71;
        font-size: 14px;
        &:hover {
            text-decoration: none;
        }
        img {
            margin-left: 3px;
        }
    `,
    centerTitle: styled.h2`
        margin: 30px 0 0 0;
        color: ${ colors.normalText };
        font-family: 'Montserrat', sans-serif;
        letter-spacing: 1px;
        font-size: 14px;
        font-weight: 500;
        text-align: center;
    `,
    actionCategory: styled.p`
        color: ${ colors.normalText };
        font-family: 'Montserrat', sans-serif;
        font-size: 12px;
        margin: 0;
    `,
    actionCategoryLink: styled.a`
        color: ${ colors.normalText };
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
        margin: 5px 0; 
        &:hover {
            text-decoration: none;
        }
    `,
}
