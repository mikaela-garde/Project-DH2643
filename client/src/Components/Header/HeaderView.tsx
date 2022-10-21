import React from 'react';
import styled from "styled-components";
import BackButtonArrow from "../../Images/back-button-arrow.svg";
import {Link} from "react-router-dom";
import BoardSVG from "../../Images/board.svg";
import FriendsSVG from "../../Images/friends.svg";
import darkModeIcon from "../../Images/moon.svg";
import { Heading1 } from '../../StyledComponents';
import SVG from "react-inlinesvg";
import Switch from "react-switch";

const HeaderView= ({NavTitle, ProfilePic, darkMode, handleModeChange, onLogout, backButtonVis}) =>

    <HeadingContainer>

        <Menu>
            <IconsContainer>
                <IconContainer>
                    <Icon src ={BoardSVG}></Icon>
                </IconContainer>
                <IconContainer>
                    <Icon src ={FriendsSVG}></Icon>
                </IconContainer>
                <IconContainer>
                    <Icon src ={ProfilePic}></Icon>
                </IconContainer>
                <IconContainer>
                    <Icon src={darkModeIcon}></Icon>
                    <Switch checked={darkMode} onChange={handleModeChange} uncheckedIcon={false} checkedIcon={false} offColor="#635F8B" onColor="#1F1E61" activeBoxShadow="null"/>
                    <button onClick={() => onLogout()}>Logout</button>
                </IconContainer>
            </IconsContainer>
        </Menu>

        <NavContainer>
            {backButtonVis && <NavLink to="/">
                <BackButton src={BackButtonArrow}></BackButton>
            </NavLink>}
            <PageTitle>{NavTitle}</PageTitle> 
        </NavContainer>

    </HeadingContainer>
;

const HeadingContainer = styled.div`
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    @media (max-width: 1000px) {
        flex-direction: column;
        height:200px;
        gap: 40px;
    }
    z-index: 3;
`;

////////////////////////////// BACK BUTTON & TITLE //////////////////////////////////
const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-items: center;
    @media (max-width: 1000px) {
        position: static;
    }
    z-index: 2;
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

/////////////////////////////// MENU /////////////////////////////////
const Menu = styled.div`
        color: ${props => props.theme.colors.contrast};
        font-size: ${props => props.theme.fontSizes.xsmall};
        font-weight: 400;
        font-family: ${props => props.theme.fonts.raleway}; 
        background-color: solid;
        background-color: ${props => props.theme.colors.primary};
        border-color: ${props => props.theme.colors.primary};
        border-radius: 150px;
        height: 45px;
        width: 60vw;
        cursor: pointer;
        border-style: solid;

        @media (min-width: 1000px) {
            position: absolute;
            right: 20px;
            width: 250px;
            }
       z-index: 2;
`;

const IconsContainer = styled.div`  
    display: flex;
    justify-content: space-evenly;
    &:hover > *{
        opacity: 0.5;
        transition: opacity 200ms ;
    }
`;

const Icon = styled(SVG)`
    vertical-align: middle;
    height: 30px;
    & path{
        fill: ${props => props.theme.colors.contrast};
    }
`;

const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    opacity: 1;
    transition: opacity 200ms;
    :hover{
        opacity: 1;
        transition: opacity 200ms ;
    }
`;

export default HeaderView;