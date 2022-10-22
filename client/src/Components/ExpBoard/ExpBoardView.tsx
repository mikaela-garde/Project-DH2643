import React from 'react';
import styled, {keyframes} from "styled-components";
import { NavLink, PrimaryBtn, PrimaryBtnContainer, Heading1, BackButton, NavContainer, GridPresenterContainer, ContentContainerAll, BtnPosBottomCenter} from '../../StyledComponents';
import GridPresenter from '../Grid/GridPresenter';
import {Link} from "react-router-dom";
import UploadPresenter from '../Upload/UploadPresenter';
import BackgroundBlobLeftSVG from "../../Images/BackgroundBlobDashboardLeft.svg";
import BackgroundBlobRightSVG from "../../Images/BackgroundBlobDashboardRight.svg";
import SVG from "react-inlinesvg";
import BackButtonArrow from "../../Images/back-button-arrow.svg";
import { fadeInUp, fadeInDown } from 'react-animations';

const fadeInUpAnimation = keyframes`${fadeInUp}`;
const fadeInDownAnimation = keyframes`${fadeInDown}`;

const ExpBoardView= ({name, startTime, endTime, posts, showAddContent, isShown, blur, brightness}) =>
    <ContentWrapper>
        {isShown && <UploadPresenter showAdd={showAddContent}></UploadPresenter>}
        
        <ContentContainer blur={blur} brightness={brightness}>
            <NavContainerXPBoard>
                <NavLinkXPBoard to="/">
                    <BackButtonXP src={BackButtonArrow}></BackButtonXP>
                </NavLinkXPBoard>
            <PageTitle>My Experience</PageTitle> 
            </NavContainerXPBoard>
            <p>{startTime} - {endTime}</p>

            <GridPresenterContainerXPBoard>
                <GridPresenter/>
            </GridPresenterContainerXPBoard>

            <ButtonContainer>
                <AddContentBtn onClick={() => showAddContent()}>Add content</AddContentBtn>
            </ButtonContainer>

            <BackgroundBlobContainerLeft>
                <BackgroundBlob src ={BackgroundBlobLeftSVG}></BackgroundBlob>
            </BackgroundBlobContainerLeft>

            <BackgroundBlobContainerRight>
                <BackgroundBlob src = {BackgroundBlobRightSVG}></BackgroundBlob>
            </BackgroundBlobContainerRight>

        </ContentContainer>
    </ContentWrapper>   
;

const ContentWrapper = styled.div`
    ::-webkit-scrollbar { 
    display: none;
      }  /* Safari and Chrome */
`;

const ContentContainer = styled.div<Props>`
    ${ContentContainerAll};
    z-index: 1;
    overflow: hidden; /* hiding scrollbar*/
    filter: ${props => props.brightness ? "brightness(50%)": "brightness(100%)"}; /* blur when upload component is mounted */
    filter: ${props => props.blur ? "blur(1.5em);" : "blur(0);"};
`;

const NavContainerXPBoard = styled.div`
    ${NavContainer}
`;

const NavLinkXPBoard = styled(Link)`
    ${NavLink}
`;

const BackButtonXP = styled(SVG)`
    ${BackButton}
    animation: 1s ${fadeInDownAnimation};
`;

const PageTitle = styled.h1`
    ${Heading1}
    animation: 1s ${fadeInDownAnimation};
`;

const GridPresenterContainerXPBoard= styled.div`
    ${GridPresenterContainer}
`;

const ButtonContainer = styled.div`
    ${PrimaryBtnContainer}
    ${BtnPosBottomCenter}
    animation: 2s ${fadeInUpAnimation};
`;

const AddContentBtn = styled.button`
    ${PrimaryBtn}
    align-self: center;
    margin-top: auto;
`;

///////////////////////////////// BLOBS ///////////////////////////////

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
    right: 0px;
    z-index: 1;

    @media (max-width: 768px) {
        top: -100px;
        right: 0px;
    }
`;
const BackgroundBlob = styled.img`
    vertical-align: middle;
`;

type Props = {
    brightness?: string,
    blur?: string
}

export default ExpBoardView;