import React from 'react';
import styled from "styled-components"
import LoadingIconSVG from "../../Images/loading.svg"
import { ContentContainerAll } from '../../StyledComponents';
import SVG from 'react-inlinesvg';

const NoDataGridView = () => {

    return (<LoadingIconContainer>
        <LoadingIcon src={LoadingIconSVG} /> 
    </LoadingIconContainer>)
}
;

const LoadingIconContainer = styled.div`
    background-color: transparent;
    display: flex; 
    align-items: center;
    height: 50vh;
`;

const LoadingIcon = styled(SVG)`
    & circle {
        stroke: ${props => props.theme.colors.primary};
    }
`;


export default NoDataGridView;