import React from 'react';
import styled from "styled-components";

const TemplateView = ({onToggle, onColorChange, isShown, colorChange, onUpload, setSelectedFile}) =>

    <div>
        <button onClick={ () => onToggle() }>Show orange div</button>
        <button onClick={ () => onColorChange() }>Change Color of yellow div to red</button>
        
        <ContentContainer color={colorChange}></ContentContainer>
        <ContentContainerColorInElement color="yellow"></ContentContainerColorInElement>

        {isShown && <ContentContainerThemed></ContentContainerThemed>}
        <input type="file" name="imgfile" accept="image/jpeg, image/png" id="imgfile"
        onChange={(e) => setSelectedFile(e.target.files[0])}
        />
        <button id="submitBtn" onClick={() => onUpload("imgfile")}>Submit</button>
        <div className="" id="images"></div>
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