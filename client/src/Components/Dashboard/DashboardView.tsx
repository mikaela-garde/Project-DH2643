import React from 'react';
import styled from "styled-components";
import { PrimaryBtn, ContentContainerAll } from '../../StyledComponents';
import GridPresenter from '../Grid/GridPresenter';
import HeaderPresenter from '../Header/HeaderPresenter';
import BackgroundBlobLeftSVG from "../../Images/BackgroundBlobDashboardLeft.svg";
import BackgroundBlobRightSVG from "../../Images/BackgroundBlobDashboardRight.svg";

const DashboardView= ({}) =>
    <DashboardContainer>
        <HeaderPresenter NavTitle={"Dashboard"}/>
        <GridPresenter/>
        <CreateExpButton>Create Experience</CreateExpButton>

        <BackgroundBlobContainerLeft>
            <BackgroundBlob src ={BackgroundBlobLeftSVG}></BackgroundBlob>
        </BackgroundBlobContainerLeft>

        <BackgroundBlobContainerRight>
            <BackgroundBlob src = {BackgroundBlobRightSVG}></BackgroundBlob>
        </BackgroundBlobContainerRight>

    </DashboardContainer>
       
;

const CreateExpButton = styled.button`
    ${PrimaryBtn}
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
`;

const DashboardContainer = styled.div`
    ${ContentContainerAll};
    justify-content: flex-start;
    overflow: auto;
`

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