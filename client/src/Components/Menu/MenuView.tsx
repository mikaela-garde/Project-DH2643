import React from 'react';
import styled from "styled-components";
import BoardSVG from "../../Images/board.svg";
import FriendsSVG from "../../Images/friends.svg";

const MenuView= ({}) =>

    <div>
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
    </div>
;

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
        width: 250px;
        cursor: pointer;
        border-style: solid;

        position: fixed;
        top: 20px;
        right: 30px;
       

`;

const IconsContainer = styled.div`  
    display: flex;
    justify-content: center;
    justify-content: space-evenly;
    align-items: center; 
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

export default MenuView;