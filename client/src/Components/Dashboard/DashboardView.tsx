import React from 'react';
import styled, {keyframes} from "styled-components";
import { BtnPosBottomCenter, PrimaryBtn, PrimaryBtnContainer, ContentContainerAll, Heading1, NavContainer, GridPresenterContainer } from '../../StyledComponents';
import GridPresenter from '../Grid/GridPresenter';
import BackgroundBlobLeftSVG from "../../Images/BackgroundBlobDashboardLeft.svg";
import BackgroundBlobRightSVG from "../../Images/BackgroundBlobDashboardRight.svg";
import { fadeInUp, fadeInDown } from 'react-animations';

const fadeInUpAnimation = keyframes`${fadeInUp}`;
const fadeInDownAnimation = keyframes`${fadeInDown}`;

const DashboardView= ({toCreateExp}) =>
    <ContentContainer>

        <NavContainerDashboard>
            <PageTitle>My Experiences</PageTitle> 
        </NavContainerDashboard>

        <GridPresenterContainerDashboard>
            <GridPresenter/>
        </GridPresenterContainerDashboard>

        <ButtonContainer>
            <CreateExpButton onClick={() => toCreateExp()}>Create Experience</CreateExpButton>
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
    justify-content: flex-start;
`;

const NavContainerDashboard = styled.div`
    ${NavContainer}
`;

const PageTitle = styled.h1`
    ${Heading1};
    animation: 1s ${fadeInDownAnimation};
`;

const GridPresenterContainerDashboard = styled.div`
    ${GridPresenterContainer}
`;

const ButtonContainer = styled.div`
    ${PrimaryBtnContainer}
    ${BtnPosBottomCenter}
`;

const CreateExpButton = styled.button`
    ${PrimaryBtn}
    animation: 2s ${fadeInUpAnimation};
`;

const BackgroundBlobContainerLeft = styled.div`
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    z-index: 1;
`;

const BackgroundBlobContainerRight = styled.div`
    position: fixed;
    top: 0px;
    right: 0;
    z-index: 1;
    
    @media (max-width: 768px) {
        top: -100px;
        right: 0px;
    }
`;

const BackgroundBlob = styled.img`
    vertical-align: middle;
`;

export default DashboardView;