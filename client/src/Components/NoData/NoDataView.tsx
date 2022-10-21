import React from 'react';
import styled from "styled-components"
import LoadingIconSVG from "../../Images/loading.svg"
import { ContentContainerAll } from '../../StyledComponents';

const NoDataView = () => {

    return (<LoadingIconContainer>
        <LoadingIcon src={LoadingIconSVG} alt ="Loading gif" /> 
    </LoadingIconContainer>)
}
;

const LoadingIconContainer = styled.div`
    ${ContentContainerAll};    
`;

const LoadingIcon = styled.img``;


export default NoDataView;