import styled from "styled-components";


export const SignInElements = {
    WrapLogin: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100vh;
        background-color: #f4f4f4;
    `,
    LoginBox: styled.div`
        width: 350px;
        margin: auto;
        border-radius: 3px;
        background-color: #ffffff;
        box-shadow: 0 2px 8px 0 rgba(0,0,0,0.1);
        padding: 30px;
        text-align: center;
    `,
    LogoImg: styled.img`
        width: 250px;
        margin-bottom: 30px;
    `,
    WrapInputs: styled.div`
        margin: 0px 0 30px 0;
    `,
    WrapLink: styled.div`
        margin-top: 15px
    `,
    Link: styled.a`
        color: #55585a;
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
        margin: 5px 0; 
        &:hover {
            text-decoration: none;
        }
    `,
    PasswordRecover: styled.a`
        color: #55585a;
        font-family: 'Montserrat', sans-serif;
        font-size: 12px;
        margin: 5px 0; 
        &:hover {
            text-decoration: none;
        }
    `,
}