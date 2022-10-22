import React from 'react';
import styled, {keyframes} from "styled-components";
import { PrimaryBtn, PrimaryBtnContainer, ContentContainerAll, Heading1 } from '../../StyledComponents';
import GridPresenter from '../Grid/GridPresenter';
import HeaderPresenter from '../Header/HeaderPresenter';
import BackgroundBlobLeftSVG from "../../Images/BackgroundBlobDashboardLeft.svg";
import BackgroundBlobRightSVG from "../../Images/BackgroundBlobDashboardRight.svg";
import { fadeInUp } from 'react-animations';
import SVG from "react-inlinesvg";
import {Link} from "react-router-dom";

const fadeInUpAnimation = keyframes`${fadeInUp}`;

const DashboardView= ({toCreateExp}) =>
    <DashboardContainer>
            <NavContainer>
                <PageTitle>My Experiences</PageTitle> 
            </NavContainer>
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
    animation: 2s ${fadeInUpAnimation};
`;

const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 13px;
`;
const DashboardContainer = styled.div`
    ${ContentContainerAll};
    justify-content: flex-start;
    overflow: hidden; /* animationen skapar en scrollbar om inte denna finns*/
`;

const GridPresenterContainer = styled.div`
    margin: 150px;
    overflow: auto;
    ::-webkit-scrollbar { 
    display: none;
      }  /* Safari and Chrome */
`;

const BackButton = styled(SVG)`
    height: 50px;
    & circle {
        fill: ${props => props.theme.colors.primary};
    }
    & path{
        fill: ${props => props.theme.colors.contrast};
    }
`;

const NavLink = styled(Link)`
    display: flex;
    align-self: center;
    margin-right:30px;
`;

const PageTitle = styled.h1`
    ${Heading1}
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