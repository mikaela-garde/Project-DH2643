import React from 'react';
import styled from "styled-components"
import LoadingIconSVG from "../../Images/loading.svg"

const NoDataView = () => 

    <LoadingIconContainer>
        <LoadingIcon src={LoadingIconSVG} alt ="Loading gif" /> 
    </LoadingIconContainer>

;

const LoadingIconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.colors.primary};
    height: 100vh;
    
`;

const LoadingIcon = styled.img``;


export default NoDataView;