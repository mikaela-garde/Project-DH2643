import React from 'react';
import styled, {keyframes} from "styled-components";
import { NavLink, PrimaryBtn, PrimaryBtnContainer, Heading1, Heading2, Heading3, BackButton, NavContainer, GridPresenterContainer, ContentContainerAll, BtnPosBottomCenter, BodyText} from '../../StyledComponents';
import ExpBoardGridPresenter from '../ExpBoardGrid/ExpBoardGridPresenter';
import {Link} from "react-router-dom";
import UploadPresenter from '../Upload/UploadPresenter';
import BackgroundBlobLeftSVG from "../../Images/BackgroundBlobDashboardLeft.svg";
import BackgroundBlobRightSVG from "../../Images/BackgroundBlobDashboardRight.svg";
import SVG from "react-inlinesvg";
import BackButtonArrow from "../../Images/back-button-arrow.svg";
import { fadeInUp, fadeInDown } from 'react-animations';
import { Gallery } from "react-grid-gallery";
import profileicon from "../../Images/NewEmptyProfileImg.svg";


const fadeInUpAnimation = keyframes`${fadeInUp}`;
const fadeInDownAnimation = keyframes`${fadeInDown}`;

const ExpBoardView= ({name, startTime, endTime, showAddContent, isShown, blur, brightness, images}) =>
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
            <Gallery images={images.map((image) => ({...image,
                customOverlay: 
                <InfoContainer>
                <ProfileContainer>
                <ProfileImg src={profileicon} ></ProfileImg>
                <Username>{image.name}</Username>
                </ProfileContainer>
                <Caption>{image.uploaderName}</Caption>
                </InfoContainer>
                }))} enableImageSelection={false} rowHeight={230} margin={1} ></Gallery>
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
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.colors.background};
    height: 100vh;
    width: 100vw;
    overflow: hidden; /* animationen skapar en scrollbar om inte denna finns*/
    z-index: 1;
    overflow: hidden; /* hiding scrollbar*/
    filter: ${props => props.brightness ? "brightness(50%)": "brightness(100%)"}; /* blur when upload component is mounted */
    filter: ${props => props.blur ? "blur(1.5em);" : "blur(0);"};
`;

const NavContainerXPBoard = styled.div`
    ${NavContainer}
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
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
    display: flex;
    justify-content: center;
    height: 300px;
    
    
`;

const AddContentBtn = styled.button`
    ${PrimaryBtn}
    align-self: center;
    margin-top:auto;
    
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


const Username = styled.h3`
  ${Heading3};
  color: white;
  font-size: 80%;


`; 

const ProfileImg = styled.img`
  height: 20px;

`;

const ProfileContainer = styled.div`
  display: flex;
  margin: 5px;
  align-items: center;
  gap: 5px;
`;

const Caption = styled.p`
  ${BodyText};
  color: white;
  font-size: 75%;
  margin-left: 5px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  bottom: 0;
  width: 100%;

  max-height: 50px;
  overflow: auto;
  
`;

export default ExpBoardView;