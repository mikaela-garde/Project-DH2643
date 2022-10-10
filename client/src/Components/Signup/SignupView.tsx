import React from 'react';
import styled from "styled-components";
import ProfileHolderImg from "../../Images/profile-holder-signup.svg";
import BackgroundBlobLeftSVG from "../../Images/BackgroundBlobLoginLeft.svg";
import BackgroundBlobRightSVG from "../../Images/BackgroundBlobLoginRight.svg";
import BackButtonArrow from "../../Images/back-button-arrow.svg";
import {Link} from "react-router-dom";

import { PrimaryBtn, InputField, ContentContainerLogin, ImgContainerLogin } from '../../StyledComponents';

const Signup = () =>
            <ContentContainer>
                <ImgContainer src={ProfileHolderImg}></ImgContainer>
                <InputFieldSignup placeholder="First name"></InputFieldSignup>
                <InputFieldSignup placeholder="Last name"></InputFieldSignup>
                <InputFieldSignup placeholder="Email"></InputFieldSignup>
                <PasswordInput placeholder="Password" type="password"></PasswordInput>
                <PasswordInput placeholder="Confirm password" type="password"></PasswordInput>
                <ButtonContainer>
                    <NavLink to="/login">
                        <BackButton src={BackButtonArrow}></BackButton>
                    </NavLink>
                        <SignUpButton>Sign up</SignUpButton>
                </ButtonContainer>
                
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

const InputFieldSignup = styled.input`
    ${InputField};
`;

const PasswordInput = styled.input`
    ${InputField};
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0px;
    >*  {
        margin: 10px;
        };
`;

const SignUpButton = styled.button`
    ${PrimaryBtn}
    align-self: center;
`;

const BackButton = styled.img`
    width: 70%;
`;

const NavLink = styled(Link)`
    display: flex;
    a {
        align-self: center;
    }
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

export default Signup;