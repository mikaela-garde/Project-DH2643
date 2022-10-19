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

const CreateExpView = ({startDate, onToggle, setName, setInvite, onInvite, participants }) =>

        <Container>
            <ContentContainer>
                <HeaderPresenter NavTitle={"Create Experience"}/>
                <DatePicker selected={startDate} onChange={onToggle} />
                <ContentWrapper>
                    <Column>
                        <InputFieldExpWrapper>
                            <InputLabelExp left="">Experience name</InputLabelExp>
                            <InputFieldExp paddingRight="150px" onChange={e => setName(e.target.value)}></InputFieldExp>
                        </InputFieldExpWrapper>

                        <FromToWrapper>
                            <InputFieldExpWrapper>
                                <InputLabelExp left="">Start</InputLabelExp>
                                <MyDatePicker selected={startDate} onChange={onToggle} dateFormat="Pp" paddingRight="0px" width="300px" fixedHeight showTimeSelect />
                            </InputFieldExpWrapper>

                            <InputFieldExpWrapper>
                                <InputLabelExp left="">End</InputLabelExp>
                                <MyDatePicker selected={startDate} onChange={onToggle} dateFormat="Pp" paddingRight="0px" width="300px" fixedHeight showTimeSelect/>
                            </InputFieldExpWrapper>
                        </FromToWrapper>
                    </Column> 

                    <Column>
                        <InputFieldExpWrapper>
                            <InputLabelExp left="">Invite Friends</InputLabelExp>
                            <InputFieldExp paddingRight="150px" onChange={e => setInvite(e.target.value)}></InputFieldExp>
                            <EnterInviteButton onClick={() => onInvite()}>Invite</EnterInviteButton>
                        </InputFieldExpWrapper>
                        <ParticipantsContainer>
                            {console.log(participants.length)}
                            {participants.forEach(participant => {
                                <ParicipantCard>
                                <p>{participant.first_name} {participant.last_name}</p>
                            </ParicipantCard>
                            })}
                        </ParticipantsContainer>
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

const MyDatePicker = styled(DatePicker)`
    ${InputField};
    padding: 12px 150px 12px 20px;
    padding-right: ${props => props.paddingRight}; 
    width: ${props => props.width};
`;

const InputLabelExp = styled.label<propsLabel>`
    ${InputLabel}
    left: ${props => props.left}; 
`;
const EnterInviteButton = styled.button`
    ${PrimaryBtn}
    align-self: center;
`;

const ParticipantsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const ParicipantCard = styled.div`

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