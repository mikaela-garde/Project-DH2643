import React from 'react';
import styled from "styled-components";
import ProfileHolderImg from "../../Images/profile-holder-signup.svg";
import BackgroundBlobLeftSVG from "../../Images/BackgroundBlobLoginLeft.svg";
import BackgroundBlobRightSVG from "../../Images/BackgroundBlobLoginRight.svg";
import {Link} from "react-router-dom";
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css';
import HeaderPresenter from '../Header/HeaderPresenter';



import { PrimaryBtn, InputField, ContentContainerLogin, InputLabel, InputFieldWrapper } from '../../StyledComponents';

const CreateExpView = ({startDate, onToggle }) =>

        <Container>
            <ContentContainer>
                <HeaderPresenter NavTitle={"Dashboard"}/>
                <DatePicker selected={startDate} onChange={onToggle} />
                <ContentWrapper>
                    <Column>
                        <InputFieldExpWrapper>
                            <InputLabelExp left="35px">Experience name</InputLabelExp>
                            <InputFieldExp paddingRight="150px"></InputFieldExp>
                        </InputFieldExpWrapper>


                        <FromToWrapper>
                            <InputFieldExpWrapper>
                                <InputLabelExp left="">From</InputLabelExp>
                                <InputFieldExp paddingRight="0px" width="150px"></InputFieldExp>
                            </InputFieldExpWrapper>

                            <InputFieldExpWrapper>
                                <InputLabelExp left="">To</InputLabelExp>
                                <InputFieldExp paddingRight="0px" width="150px"></InputFieldExp>
                            </InputFieldExpWrapper>
                        </FromToWrapper>
                    </Column> 

                    <Column>
                        <InputFieldExpWrapper>
                            <InputLabelExp left="">First name</InputLabelExp>
                            <InputFieldExp paddingRight="150px"></InputFieldExp>
                        </InputFieldExpWrapper>
                    </Column>
                </ContentWrapper>
                <ButtonContainer>
                    <NavLink to="/login">
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
        </Container>
            
;

const Container= styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`;

const ContentContainer = styled.div`
    ${ContentContainerLogin}
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    >*  {
        margin: 15px;
        };  
`;

const InputFieldExpWrapper = styled.div`
    ${InputFieldWrapper};
`;

const FromToWrapper = styled.div`
    display: flex;
    flex-direction: row;
    >*  {
        margin: 12px;
        };  
`;

const InputFieldExp = styled.input<propsField>`
    ${InputField};
    padding: 12px 150px 12px 20px;
    width: 200px;
    padding-right: ${props => props.paddingRight}; 
    width: ${props => props.width}; 
`;

const InputLabelExp = styled.label<propsLabel>`
    ${InputLabel}
    left: ${props => props.left}; 
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0px;
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
    z-index: -1;
`;

const BackgroundBlobContainerRight = styled.div`
    position: fixed;
    top: 0;
    right: 100px;
    margin: 0;
    width: 20%;
    z-index: -1;
`;
const BackgroundBlob = styled.img`
    vertical-align: middle;
`;

interface propsField {
    paddingRight: any;
  }

interface propsLabel {
    left: string;
}


export default CreateExpView;