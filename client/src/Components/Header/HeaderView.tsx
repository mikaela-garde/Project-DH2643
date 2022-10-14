import React from 'react';
import styled from "styled-components";
import BackButtonArrow from "../../Images/back-button-arrow.svg";
import {Link} from "react-router-dom";
import BoardSVG from "../../Images/board.svg";
import FriendsSVG from "../../Images/friends.svg";
import { Heading1 } from '../../StyledComponents';


const HeaderView= ({NavTitle}) =>

    <HeadingContainer>

        <Menu>
            <IconsContainer>
                <IconContainer>
                    <Icon src ={BoardSVG}></Icon>
                </IconContainer>
                <IconContainer>
                    <Icon src ={FriendsSVG}></Icon>
                </IconContainer>
            </IconsContainer>
        </Menu>

        <NavContainer>
            <NavLink to="/login">
                <BackButton src={BackButtonArrow}></BackButton>
            </NavLink>
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
    @media (max-width: 768px) {
        flex-direction: column;
        height:200px;
        gap: 40px;
    }
`;

////////////////////////////// BACK BUTTON & TITLE //////////////////////////////////
const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-items: center;
    @media (max-width: 1000px) {
        position: absolute;
        left: 20px;
    }
    @media (max-width: 768px) {
        position: static;
        
    }
`;

const BackButton = styled.img`
    height: 50px;
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
const Menu = styled.button`
        color: white;
        font-size: 1em;
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
       
        @media (min-width: 768px) {
            position: absolute;
            right: 20px;
            width: 250px;
            }
       
`;

const IconsContainer = styled.div`  
    display: flex;
    justify-content: space-evenly;
    &:hover > *{
        opacity: 0.5;
        transition: opacity 200ms ;
    }
`;

const Icon = styled.img`
    vertical-align: middle;
    height: 30px;
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