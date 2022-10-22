import React from 'react';
import styled, {keyframes} from "styled-components";
import ProfileHolderImg from "../../Images/profile-holder-signup.svg";
import BackgroundBlobLeftSVG from "../../Images/BackgroundBlobLoginLeft.svg";
import BackgroundBlobRightSVG from "../../Images/BackgroundBlobLoginRight.svg";
import {Link} from "react-router-dom";
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css';
import HeaderPresenter from '../Header/HeaderPresenter';
import BackButtonArrow from "../../Images/back-button-arrow.svg";
import SVG from "react-inlinesvg";
import {PrimaryBtnContainer, NavContainer, PrimaryBtn, InputField, ContentContainerLogin, InputLabel, InputFieldWrapper, ContentContainerAll, Heading1, BackButton } from '../../StyledComponents';
import { fadeInUp, fadeInDown } from 'react-animations';

const fadeInUpAnimation = keyframes`${fadeInUp}`;
const fadeInDownAnimation = keyframes`${fadeInDown}`;

const CreateExpView = ({setName, startDate, setStartDate, endDate, setEndDate, invite, setInvite, onInvite, participants, onCreate}) =>
        <Container>
            <NavContainerXP>
                    <NavLink to="/">
                        <BackButtonCreate src={BackButtonArrow}></BackButtonCreate>
                    </NavLink>
                <PageTitle>Create Experience</PageTitle> 
            </NavContainerXP>

            <ContentContainer>
                <ContentWrapper>
                    <Column>
                        <InputFieldExpWrapper>
                            <InputLabelExp left="">Experience name</InputLabelExp>
                            <InputFieldExp paddingRight="150px" onChange={e => setName(e.target.value)}></InputFieldExp>
                        </InputFieldExpWrapper>

                        <FromToWrapper>
                            <InputFieldExpWrapper>
                                <InputLabelExp left="">Start</InputLabelExp>
                                <MyDatePicker onChange={(e) => setStartDate(e)} startDate={startDate} selected={startDate} dateFormat={"Pp"} selectsStart paddingRight="0px" width="170px" showTimeSelect />
                            </InputFieldExpWrapper>

                            <InputFieldExpWrapper>
                                <InputLabelExp left="">End</InputLabelExp>
                                <MyDatePicker onChange={(e) => setEndDate(e)} startDate={startDate} endDate={endDate} minDate={startDate} selected={endDate} selectsEnd paddingRight="0px" width="170px" dateFormat={"Pp"} showTimeSelect/>

                            </InputFieldExpWrapper>
                        </FromToWrapper>
                    </Column> 

                    <Column>
                        <InputFieldExpWrapper>
                            <InputLabelExp left="">Invite Friends</InputLabelExp>
                            <InputFieldExp paddingRight="150px" onChange={e => setInvite(e.target.value)} value={invite}></InputFieldExp>
                            <EnterInviteButton onClick={() => onInvite()}>Invite</EnterInviteButton>
                        </InputFieldExpWrapper>
                        <ParticipantsContainer>
                            {participants.map(participant => {
                                return <ParticipantCard key={participant.id}>
                                    <img src={participant.profile_img} />
                                    <p>{participant.first_name} {participant.last_name}</p>
                                </ParticipantCard>
                            })}
                        </ParticipantsContainer>
                    </Column>
                </ContentWrapper>

                <ButtonContainer>
                    <SignUpButton onClick={e => onCreate()}>Create Experience</SignUpButton>
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
    ${ContentContainerAll};
`;

const NavContainerXP = styled.div`
    ${NavContainer}
`;

const NavLink = styled(Link)`
    display: flex;
    a {
        align-self: center;
    }
`;

const PageTitle = styled.h1`
    ${Heading1}
    animation: 1s ${fadeInDownAnimation};
`;

const BackButtonCreate = styled(SVG)`
    animation: 0.8s ${fadeInDownAnimation};
    ${BackButton}
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

const InputLabelExp = styled.label<propsLabel>`
    ${InputLabel}
    left: ${props => props.left}; 
    z-index: 1;
`;

const InputFieldExp = styled.input<propsField>`
    ${InputField};
    width: ${props => props.width}; 
`;

const FromToWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0;
    >*  {
        margin: 12px;
        };  
`;

const MyDatePicker = styled(DatePicker)`
    ${InputField};
    padding: 12px 100px 12px 20px;
    padding-right: ${props => props.paddingRight}; 
    width: ${props => props.width};
    margin: 0;
`;

const EnterInviteButton = styled.button`
    ${PrimaryBtn}
    align-self: center;
    margin-left: 20px;
    width: 150px;
`;

const ParticipantsContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 350px;
`;

const ParticipantCard = styled.div`
    margin: 10px;
`;

const ButtonContainer = styled.div`
    ${PrimaryBtnContainer};
`;

const SignUpButton = styled.button`
    ${PrimaryBtn}
    align-self: center;
`;

const BackgroundBlobContainerLeft = styled.div`
    position: fixed;
    bottom: 0;
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