import React from 'react';
import styled from "styled-components";
import LogotypeHolderImg from "../../Images/LogotypeHolder.png";
import BackgroundBlobLeftSVG from "../../Images/BackgroundBlobLoginLeft.svg";
import BackgroundBlobRightSVG from "../../Images/BackgroundBlobLoginRight.svg";

import { PrimaryBtn, InputField, ContentContainerLogin, ImgContainerLogin } from '../../StyledComponents';

const LoginView = () =>
            <ContentContainer>
                <ImgContainer src={LogotypeHolderImg}></ImgContainer>
                <EmailInput placeholder="Email"></EmailInput>
                <PasswordInput placeholder="Password"></PasswordInput>
                <LoginButton>Login</LoginButton>
                <SignUpButton>Sign-up {'>'}</SignUpButton>
                <BackgroundBlobContainerLeft>
                    <BackgroundBlob src ={BackgroundBlobLeftSVG}></BackgroundBlob>
                </BackgroundBlobContainerLeft>
                <BackgroundBlobContainerRight>
                    <BackgroundBlob src = {BackgroundBlobRightSVG}></BackgroundBlob>
                </BackgroundBlobContainerRight>
            </ContentContainer>
;

const ContentContainer = styled.div`
    ${ContentContainerLogin}
`;


const ImgContainer = styled.img`
    ${ImgContainerLogin}
`;

const EmailInput = styled.input`
    ${InputField};
`;

const PasswordInput = styled.input`
    ${InputField};
`;

const LoginButton = styled.button`
    ${PrimaryBtn}
`;

const SignUpButton = styled.a`
    color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fonts.raleway};
    font-weight: 600;
    font-size: 1em;
    letter-spacing: 2px;
`;


const BackgroundBlobContainerLeft = styled.div`
    position: fixed;
    bottom: -100px;
    left: 0;
    margin: 0;
    width: 20%;
`;

const BackgroundBlobContainerRight = styled.div`
    position: fixed;
    top: 0;
    right: 100px;
    margin: 0;
    width: 20%;
`;
const BackgroundBlob = styled.img`
    vertical-align: middle;
`;

export default LoginView;