import React from 'react';
import styled from "styled-components";
import ProfileHolderImg from "../../Images/profile-holder-signup.svg";
import BackgroundBlobLeftSVG from "../../Images/BackgroundBlobLoginLeft.svg";
import BackgroundBlobRightSVG from "../../Images/BackgroundBlobLoginRight.svg";
import {Link} from "react-router-dom";
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css';
import HeaderPresenter from '../Header/HeaderPresenter';
import { PrimaryBtn, InputField, ContentContainerLogin, InputLabel, InputFieldWrapper, ContentContainerAll } from '../../StyledComponents';

const CreateExpView = ({setName, startDate, setStartDate, endDate, setEndDate, invite, setInvite, onInvite, participants }) =>
        <Container>
            <HeaderPresenter NavTitle={"Create Experience"}/>
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
                    <NavLink to="/login">
                    </NavLink>
                        <SignUpButton>Create Experience</SignUpButton>
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
    margin: 0;
    >*  {
        margin: 12px;
        };  
`;

const InputFieldExp = styled.input<propsField>`
    ${InputField};
    padding: 12px 150px 12px 14px;
    padding-right: ${props => props.paddingRight}; 
    width: ${props => props.width}; 
`;

const MyDatePicker = styled(DatePicker)`
    ${InputField};
    padding: 12px 100px 12px 20px;
    padding-right: ${props => props.paddingRight}; 
    width: ${props => props.width};
    margin: 0;
`;

const InputLabelExp = styled.label<propsLabel>`
    ${InputLabel}
    left: ${props => props.left}; 
    z-index: 1;
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
    display: flex;
    flex-direction: row;
    margin: 0px;
`;

const SignUpButton = styled.button`
    ${PrimaryBtn}
    align-self: center;
`;


const NavLink = styled(Link)`
    display: flex;
    a {
        align-self: center;
    }
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