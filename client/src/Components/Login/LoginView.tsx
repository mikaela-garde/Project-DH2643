import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";
import LogotypeHolderImg from "../../Images/LogotypeHolder.png";
import BackgroundBlobLeftSVG from "../../Images/BackgroundBlobLoginLeft.svg";
import BackgroundBlobRightSVG from "../../Images/BackgroundBlobLoginRight.svg";

import { PrimaryBtn, InputField, ContentContainerAll, ImgContainerLogin, InputLabel, NavLink, InputFieldWrapper} from '../../StyledComponents';

const LoginView = ({loginErrorMessage, setEmail, setPassword, onSignIn}) =>
            <ContentContainer>
                <ImgContainer src={LogotypeHolderImg}></ImgContainer>

                <InputFieldLoginWrapper>
                    <InputLabelLogin>Email</InputLabelLogin>
                    <InputFieldLogin onChange={e => setEmail(e.target.value)}></InputFieldLogin>
                </InputFieldLoginWrapper>
                
                <InputFieldLoginWrapper>
                    <InputLabelLogin>Password</InputLabelLogin>
                    <InputFieldLogin type="password" onChange={e => setPassword(e.target.value)}></InputFieldLogin>
                </InputFieldLoginWrapper>

                {loginErrorMessage}
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
`;

const InputFieldLoginWrapper = styled.div`
    ${InputFieldWrapper}
`;

const InputFieldLogin = styled.input`
    ${InputField};
`;

const InputLabelLogin = styled.label`
    ${InputLabel}
`;

const LoginButton = styled.button`
    ${PrimaryBtn}
`;
const NavLinkSignup = styled(Link)`
    ${NavLink}
    z-index: 2;
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

export default LoginView;