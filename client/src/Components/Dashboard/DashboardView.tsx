import React from 'react';
import styled from "styled-components";
import { PrimaryBtn, PrimaryBtnContainer, ContentContainerAll } from '../../StyledComponents';
import GridPresenter from '../Grid/GridPresenter';
import HeaderPresenter from '../Header/HeaderPresenter';
import BackgroundBlobLeftSVG from "../../Images/BackgroundBlobDashboardLeft.svg";
import BackgroundBlobRightSVG from "../../Images/BackgroundBlobDashboardRight.svg";

const DashboardView= ({toCreateExp}) =>
    <DashboardContainer>
        <HeaderPresenter NavTitle={"My Experiences"}/>
        <GridPresenterContainer>
            <GridPresenter/>
        </GridPresenterContainer>
        <ButtonContainer>
            <CreateExpButton onClick={() => toCreateExp()}>Create Experience</CreateExpButton>
        </ButtonContainer>
        <BackgroundBlobContainerLeft>
            <BackgroundBlob src ={BackgroundBlobLeftSVG}></BackgroundBlob>
        </BackgroundBlobContainerLeft>

        <BackgroundBlobContainerRight>
            <BackgroundBlob src = {BackgroundBlobRightSVG}></BackgroundBlob>
        </BackgroundBlobContainerRight>

    </DashboardContainer>
       
;

const ButtonContainer = styled.div`
    ${PrimaryBtnContainer}
`;

const CreateExpButton = styled.button`
    ${PrimaryBtn}
    align-self: center;
    margin-top: auto;
    margin-bottom: 30px;
`;

const DashboardContainer = styled.div`
    ${ContentContainerAll};
    justify-content: flex-start;
    overflow: auto;
`;

const GridPresenterContainer = styled.div`
    margin: 40px;
    overflow: auto;
`;

const BackgroundBlobContainerLeft = styled.div`
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: -50px;
    z-index: 1;
`;

const BackgroundBlobContainerRight = styled.div`
    position: fixed;
    top: 0px;
    right: -100px;
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