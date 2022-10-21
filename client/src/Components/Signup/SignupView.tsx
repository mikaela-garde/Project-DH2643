import React from 'react';
import styled from "styled-components";
import ProfileHolderImg from "../../Images/profile-holder-signup.svg";
import BackgroundBlobLeftSVG from "../../Images/BackgroundBlobLoginLeft.svg";
import BackgroundBlobRightSVG from "../../Images/BackgroundBlobLoginRight.svg";
import BackButtonArrow from "../../Images/back-button-arrow.svg";
import {Link} from "react-router-dom";
import CatImg from "../../Images/sad_cat.jpeg";
import SVG from "react-inlinesvg";

import { PrimaryBtn, InputField, ContentContainerAll, ImgContainerLogin, InputLabel, InputFieldWrapper} from '../../StyledComponents';

const SignupView = ({loginErrorMessage, setFirstName, setLastName, setEmail, setPassword, onSignUp, setImage}) =>
            <ContentContainer>
                <ImgContainer src={ProfileHolderImg} onClick={e => setImage(CatImg)}></ImgContainer>
                <InputFieldSignupWrapper>
                    <InputLabelSignup>First name</InputLabelSignup>
                    <InputFieldSignup onChange={e => setFirstName(e.target.value)}></InputFieldSignup>
                </InputFieldSignupWrapper>

                <InputFieldSignupWrapper>
                    <InputLabelSignup>Last name</InputLabelSignup>
                    <InputFieldSignup onChange={e => setLastName(e.target.value)}></InputFieldSignup>
                </InputFieldSignupWrapper>

                <InputFieldSignupWrapper>
                    <InputLabelSignup>Email</InputLabelSignup>
                    <InputFieldSignup onChange={e => setEmail(e.target.value)}></InputFieldSignup>
                </InputFieldSignupWrapper>

                <InputFieldSignupWrapper>
                    <InputLabelSignup>Password</InputLabelSignup>
                    <InputFieldSignup type ="password" onChange={e => setPassword(e.target.value)}></InputFieldSignup>
                </InputFieldSignupWrapper>
                {loginErrorMessage}
                <ButtonContainer>
                    <NavLink to="/">
                        <BackButton src={BackButtonArrow}></BackButton>
                    </NavLink>
                        <SignUpButton onClick={() => onSignUp()}>Sign up</SignUpButton>
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
    ${ContentContainerAll};
    height: 100vh;
    >*  {
        margin: 15px;
        };
`;

const ImgContainer = styled(SVG)`
    ${ImgContainerLogin}
    & circle {
        fill: ${props => props.theme.colors.contrast};
        stroke: ${props => props.theme.colors.primary}
    }
    & path{
        fill: ${props => props.theme.colors.primary};
    }

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
        z-index: 2;
`;

const SignUpButton = styled.button`
    ${PrimaryBtn}
    align-self: center;
`;

const BackButton = styled(SVG)`
    height: 50px;
    align-self: center;
    margin-right: 20px;
    & circle {
        fill: ${props => props.theme.colors.primary};
    }
    & path{
        fill: ${props => props.theme.colors.contrast};
    }
    :hover {
        cursor: pointer;
    }
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

export default SignupView;