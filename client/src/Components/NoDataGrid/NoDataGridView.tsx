import React from 'react';
import styled from "styled-components"
import LoadingIconSVG from "../../Images/loading.svg"
import { ContentContainerAll } from '../../StyledComponents';

const NoDataGridView = () => {

    return (<LoadingIconContainer>
        <LoadingIcon src={LoadingIconSVG} alt ="Loading gif" /> 
    </LoadingIconContainer>)
}
;

const LoadingIconContainer = styled.div`
    ${ContentContainerAll};
    background-color: #0F0838;
`;

const LoadingIcon = styled.img``;


export default NoDataGridView;