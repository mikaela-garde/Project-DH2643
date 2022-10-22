import React from 'react';
import styled, {keyframes} from "styled-components";
import BackButtonArrow from "../../Images/back-button-arrow.svg";
import {Link} from "react-router-dom";
import BoardSVG from "../../Images/board.svg";
import FriendsSVG from "../../Images/friends.svg";
import darkModeIcon from "../../Images/moon.svg";
import { Heading1 } from '../../StyledComponents';
import SVG from "react-inlinesvg";
import Switch from "react-switch";
import { fadeInRight } from 'react-animations';
const fadeInRightAnimation = keyframes`${fadeInRight}`;

const HeaderView= ({ProfilePic, darkMode, handleModeChange, onLogout, backButtonVis}) =>
    <HeaderContainer>    
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
                </IconContainer>
                <IconContainer>
                <button onClick={() => onLogout()}>Logout</button>
                </IconContainer>
            </IconsContainer>
        </Menu>
    </HeaderContainer>
;


/////////////////////////////// MENU /////////////////////////////////
const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 30px;
    right: 30px;

    @media (max-width: 1000px) {
        margin-top: 15px;
        position: static;
        top: 0px;
        right: 0px;
    }
`;
/////////////////////////////// MENU /////////////////////////////////
const Menu = styled.div`
        animation: 2s ${fadeInRightAnimation};
        color: ${props => props.theme.colors.contrast};
        font-size: ${props => props.theme.fontSizes.xsmall};
        font-weight: 400;
        font-family: ${props => props.theme.fonts.raleway}; 
        background-color: solid;
        background-color: ${props => props.theme.colors.primary};
        border-color: ${props => props.theme.colors.primary};
        border-radius: 150px;
        cursor: pointer;
        border-style: solid;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 45px;

       z-index: 3;
`;

const IconsContainer = styled.div`  
    display: flex;
    justify-content: space-evenly;
    margin: 20px;

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
    margin: 0px 10px;
    :hover{
        opacity: 1;
        transition: opacity 200ms ;
    }
`;
/*        <NavContainer>
            {backButtonVis && <NavLink to="/">
                <BackButton src={BackButtonArrow}></BackButton>
            </NavLink>}
            <PageTitle>{NavTitle}</PageTitle> 
        </NavContainer>*/

export default HeaderView;