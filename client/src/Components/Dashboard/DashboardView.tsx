import React from 'react';
import styled from "styled-components";
import { PrimaryBtn } from '../../StyledComponents';
import GridView from '../Grid/GridView';
import HeaderPresenter from '../Header/HeaderPresenter';
import BackgroundBlobLeftSVG from "../../Images/BackgroundBlobDashboardLeft.svg";
import BackgroundBlobRightSVG from "../../Images/BackgroundBlobDashboardRight.svg";

const DashboardView= ({}) =>
    <Container>
        <HeaderPresenter NavTitle={"Dashboard"}/>
        <GridView/>
        <CreateExpButton>Create Experience</CreateExpButton>
        <BackgroundBlobContainerLeft>
            
            <BackgroundBlob src ={BackgroundBlobLeftSVG}></BackgroundBlob>
        </BackgroundBlobContainerLeft>
        <BackgroundBlobContainerRight>
            <BackgroundBlob src = {BackgroundBlobRightSVG}></BackgroundBlob>
        </BackgroundBlobContainerRight>

    </Container>
       
;

const CreateExpButton = styled.button`
    ${PrimaryBtn}
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);

`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const BackgroundBlobContainerLeft = styled.div`
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: -50px;
    z-index:-1;
`;

const BackgroundBlobContainerRight = styled.div`
    position: absolute;

    right: 0%;
    z-index: -1;
`;
const BackgroundBlob = styled.img`
    vertical-align: middle;
`;

export default DashboardView;