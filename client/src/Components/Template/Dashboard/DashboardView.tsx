import React from 'react';
import styled from "styled-components";

const TemplateView= ({onToggle, onColorChange, isShown, colorChange}) =>

    <div>
        <button onClick={ () => onToggle() }>Show orange div</button>
        <button onClick={ () => onColorChange() }>Change Color of yellow div</button>
        
        <ContentContainer color={colorChange}></ContentContainer>
        <ContentContainerColorInElement color="black"></ContentContainerColorInElement>

        {isShown && <ContentContainerThemed></ContentContainerThemed>}
    </div>
;


const ContentContainer = styled.div`
    background-color: ${props => props.color ? "red": "yellow"}; 
    width: 100px;
    height: 100px;
    margin: 5px;
`;

const ContentContainerColorInElement = styled.div`
    background-color: ${props => props.color}; 
    width: 100px;
    height: 100px;
    margin: 5px;
`;


const ContentContainerThemed = styled.div`
    background-color: ${props => props.theme.colors.orange}; 
    width: 100px;
    height: 100px;
    margin: 5px;
`;


export default TemplateView;