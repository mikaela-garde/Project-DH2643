import React from 'react';
import styled from "styled-components";
import ProfileHolderImg from "../../Images/profile-holder-signup.svg";
import BackgroundBlobLeftSVG from "../../Images/BackgroundBlobLoginLeft.svg";
import BackgroundBlobRightSVG from "../../Images/BackgroundBlobLoginRight.svg";
import BackButtonArrow from "../../Images/back-button-arrow.svg";
import {Link} from "react-router-dom";

import { PrimaryBtn, InputField, ContentContainerLogin, ImgContainerLogin, InputLabel, InputFieldWrapper } from '../../StyledComponents';

const Signup = () =>
            <ContentContainer>
                <ImgContainer src={ProfileHolderImg}></ImgContainer>
                
                <InputFieldSignupWrapper>
                    <InputLabelSignup>First Name</InputLabelSignup>
                    <InputFieldSignup></InputFieldSignup>
                </InputFieldSignupWrapper>

                <InputFieldSignupWrapper>
                    <InputLabelSignup>Last name</InputLabelSignup>
                    <InputFieldSignup></InputFieldSignup>
                </InputFieldSignupWrapper>

                <InputFieldSignupWrapper>
                    <InputLabelSignup>Password</InputLabelSignup>
                    <InputFieldSignup type ="password"></InputFieldSignup>
                </InputFieldSignupWrapper>

                <InputFieldSignupWrapper>
                    <InputLabelSignup>Confirm Password</InputLabelSignup>
                    <InputFieldSignup type ="password"></InputFieldSignup>
                </InputFieldSignupWrapper>

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

const InputFieldSignupWrapper = styled.div`
    ${InputFieldWrapper};
`;

const InputFieldSignup = styled.input`
    ${InputField};
`;

const InputLabelSignup = styled.label`
    ${InputLabel}
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