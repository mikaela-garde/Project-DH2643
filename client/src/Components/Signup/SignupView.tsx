import React from 'react';
import styled, {keyframes} from "styled-components";
import ProfileHolderImg from "../../Images/NewEmptyProfileImg.svg";
import AddButton from "../../Images/addButton.svg"
import BackgroundBlobLeftSVG from "../../Images/BackgroundBlobLoginLeft.svg";
import BackgroundBlobRightSVG from "../../Images/BackgroundBlobLoginRight.svg";
import BackButtonArrow from "../../Images/back-button-arrow.svg";
import {Link} from "react-router-dom";
import SVG from "react-inlinesvg";
import { fadeInDown } from 'react-animations';
import { FileUploader } from "react-drag-drop-files";

const Animation = keyframes`${fadeInDown}`;

import { PrimaryBtn, PrimaryBtnContainer, InputField, ContentContainerAll, ImgContainerLogin, InputLabel, InputFieldWrapper, BodyText} from '../../StyledComponents';

const SignupView = ({loginErrorMessage, setFirstName, setLastName, setEmail, setPassword, onSignUp, handleFileChange, fileTypes, previewImage}) =>
            <ContentContainer>
                <InputFieldSignupWrapper animationTime="2.5s">
                    <InputLabelSignup>First name</InputLabelSignup>
                    <InputFieldSignup onChange={e => setFirstName(e.target.value)}></InputFieldSignup>
                </InputFieldSignupWrapper>

                <InputFieldSignupWrapper animationTime="2.2s">
                    <InputLabelSignup>Last name</InputLabelSignup>
                    <InputFieldSignup onChange={e => setLastName(e.target.value)}></InputFieldSignup>
                </InputFieldSignupWrapper>

                <InputFieldSignupWrapper animationTime="1.9s">
                    <InputLabelSignup>Email</InputLabelSignup>
                    <InputFieldSignup onChange={e => setEmail(e.target.value)}></InputFieldSignup>
                </InputFieldSignupWrapper>

                <InputFieldSignupWrapper animationTime="1.6s">
                    <InputLabelSignup>Password</InputLabelSignup>
                    <InputFieldSignup type ="password" onChange={e => setPassword(e.target.value)}></InputFieldSignup>
                </InputFieldSignupWrapper>

                <ErrorText>{loginErrorMessage}</ErrorText>
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
    overflow: visible!important;
    height: 100vh;
    >*  {
        margin: 15px;
        };
`;

const ProfileImgContainer = styled.div`
    ${ImgContainerLogin}
    animation: 2s ${Animation};
    justify-content: center;
`;

const PreviewImage = styled.img`
    width: 176px;
    height: 176px;
    object-fit: cover;
    border-radius: 100px;
`;

const ImgContainer = styled(SVG)`
    animation: 2s ${Animation};
    position: absolute;
    top: 125px;
    right: 0px;
    & circle {
        fill: ${props => props.theme.colors.contrast};
        stroke: ${props => props.theme.colors.primary}
    }
    & path{
        fill: ${props => props.theme.colors.primary};
    }
    cursor: pointer;
`;

const InputFieldSignupWrapper = styled.div<Props>`
    ${InputFieldWrapper};
    animation: ${props => props.animationTime} ${Animation};
`;

const InputFieldSignup = styled.input`
    ${InputField};
`;

const InputLabelSignup = styled.label`
    ${InputLabel}
`;

const ButtonContainer = styled.div`
    ${PrimaryBtnContainer};
`;

const SignUpButton = styled.button`
    ${PrimaryBtn}
    animation: 1.3s ${Animation};
    align-self: center;
    width: 235px;
`;

const BackButton = styled(SVG)`
    animation: 1.3s ${Animation};
    height: 50px;
    align-self: center;
    margin-right: 10px;
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
    right: 0;
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

type Props = {
    animationTime?: string,
}
export default SignupView;


/*
Profile picture upload function for future use
    <ProfileImgContainer>
        <PreviewImage id="previewImg" src={previewImage == "" ? ProfileHolderImg: previewImage}/>
        { // @ts-expect-error 
        <FileUploader children={
            <ImgContainer src={AddButton} ></ImgContainer>
        } hoverTitle=" " handleChange={handleFileChange} multiple={false} name="file" types={fileTypes} onTypeError={handleFileChange}>
        </FileUploader> }    
    </ProfileImgContainer>
*/