import React from 'react';
import styled from "styled-components";
import { PrimaryBtn, PrimaryBtnContainer, ContentContainerAll } from '../../StyledComponents';
import GridPresenter from '../Grid/GridPresenter';
import HeaderPresenter from '../Header/HeaderPresenter';
import UploadPresenter from '../Upload/UploadPresenter';
import BackgroundBlobLeftSVG from "../../Images/BackgroundBlobDashboardLeft.svg";
import BackgroundBlobRightSVG from "../../Images/BackgroundBlobDashboardRight.svg";

const ExpBoardView= ({name, startTime, endTime, posts, showAddContent, isShown, blur, brightness}) =>
    <ContentContainer>
        {isShown && <UploadPresenter showAdd={showAddContent}></UploadPresenter>}
        
        <DashboardContainer blur={blur} brightness={brightness}>
        <HeaderPresenter NavTitle={name}/>
        <p>{startTime} - {endTime}</p>
        <GridPresenter/>
        <AddContentBtn onClick={() => showAddContent()}>Add content</AddContentBtn>

        <GridPresenterContainer>
            <GridPresenter/>
        </GridPresenterContainer>

        <ButtonContainer>
            <AddContentBtn onClick={() => showAddContent()}>Add content</AddContentBtn>
        </ButtonContainer>

        <BackgroundBlobContainerLeft>
            <BackgroundBlob src ={BackgroundBlobLeftSVG}></BackgroundBlob>
        </BackgroundBlobContainerLeft>

        <BackgroundBlobContainerRight>
            <BackgroundBlob src = {BackgroundBlobRightSVG}></BackgroundBlob>
        </BackgroundBlobContainerRight>

        </DashboardContainer>
    </ContentContainer>
       
;

const GridPresenterContainer = styled.div`
    margin: 40px;
    overflow: auto;
`;

const AddContentBtn = styled.button`
    ${PrimaryBtn}
    align-self: center;
    margin-top: auto;
    margin-bottom: 30px;
`;

const ButtonContainer = styled.div`
    ${PrimaryBtnContainer}
    justify-content: space-around;
`;

const DashboardContainer = styled.div<Props>`
    display: flex;
    flex-direction: column;
    height: 100vh;
    z-index: 1;
    overflow: auto;

    filter: ${props => props.brightness ? "brightness(50%)": "brightness(100%)"};
    filter: ${props => props.blur ? "blur(1.5em);" : "blur(0);"};
    
`

const ContentContainer = styled.div`
    ${ContentContainerAll};
    z-index: 0;
    justify-content: flex-start;
`;

const Toolbar = styled.div`
    width: 10px;
`;

///////////////////////////////// BLOBS ///////////////////////////////
const BackgroundBlobContainerLeft = styled.div`
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0px;
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