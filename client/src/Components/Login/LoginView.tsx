import React from 'react';
import {Link} from "react-router-dom";
import LogotypeHolderImg from "../../Images/LogotypeHolder.png";
import BackgroundBlobLeftSVG from "../../Images/BackgroundBlobLoginLeft.svg";
import BackgroundBlobRightSVG from "../../Images/BackgroundBlobLoginRight.svg";
import styled, { keyframes } from 'styled-components';
import { fadeInDown } from 'react-animations';
import Logo from "../../Images/momentousLogo.png";

const Animation = keyframes`${fadeInDown}`;

import { PrimaryBtn, InputField, ContentContainerAll, ImgContainerLogin, InputLabel, NavLink, InputFieldWrapper, BodyText } from '../../StyledComponents';

const LoginView = ({loginErrorMessage, setEmail, setPassword, onSignIn}) =>
            <ContentContainer>
                <ImgContainer src={Logo}></ImgContainer>

                <InputFieldLoginWrapper>
                    <InputLabelLogin>Email</InputLabelLogin>
                    <InputFieldLogin onChange={e => setEmail(e.target.value)}></InputFieldLogin>
                </InputFieldLoginWrapper>
                
                <InputFieldLoginWrapper>
                    <InputLabelLogin>Password</InputLabelLogin>
                    <InputFieldLogin type="password" onChange={e => setPassword(e.target.value)}></InputFieldLogin>
                </InputFieldLoginWrapper>

                <ErrorText>{loginErrorMessage}</ErrorText>
                <LoginButton onClick={() => onSignIn()}>Login</LoginButton>
                <NavLinkSignup to="/signup">Sign up {'>'}</NavLinkSignup>

                <BackgroundBlobContainerLeft>
                    <BackgroundBlob src ={BackgroundBlobLeftSVG}></BackgroundBlob>
                </BackgroundBlobContainerLeft>
                <BackgroundBlobContainerRight>
                    <BackgroundBlob src = {BackgroundBlobRightSVG}></BackgroundBlob>
                </BackgroundBlobContainerRight>
            </ContentContainer>
;

const ContentContainer = styled.div`
    ${ContentContainerAll};
    >*  {
        margin: 15px;
        };
`;

const ImgContainer = styled.img`
    ${ImgContainerLogin}
    height: 200px;
    animation: 2.5s ${Animation};
    margin-bottom: 20px;
`;

const InputFieldLoginWrapper = styled.div`
    ${InputFieldWrapper}
    align-self: center;
    animation: 2s ${Animation};
`;

const InputFieldLogin = styled.input`
    ${InputField};
`;

const InputLabelLogin = styled.label`
    ${InputLabel}
`;

const LoginButton = styled.button`
    ${PrimaryBtn};
    animation: 1.5s ${Animation};
`;
const NavLinkSignup = styled(Link)`
    ${NavLink}
    z-index: 2;
    animation: 1s ${Animation};
`;

const BackgroundBlobContainerLeft = styled.div`
    position: fixed;
    bottom: -100px;
    left: 0;
    margin: 0;
    z-index: 1;
`;

const BackgroundBlobContainerRight = styled.div`
    position: fixed;
    top: 0;
    right: 100px;
    margin: 0;
    width: 20%;
    z-index: 1;
`;
const BackgroundBlob = styled.img`
    vertical-align: middle;
`;

const ErrorText = styled.p`
    ${BodyText};
    color: red;
    font-size: ${props => props.theme.fontSizes.xsmall};
`;

export default LoginView;