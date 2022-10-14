import React from 'react';
import styled from "styled-components";
import { PrimaryBtn } from '../../StyledComponents';
import GridView from '../Grid/GridView';
import HeaderPresenter from '../Header/HeaderPresenter';

const DashboardView= ({}) =>
    <Container>
        <HeaderPresenter NavTitle={"Dashboard"}/>
        <GridView/>
        <CreateExpButton>Create Experience</CreateExpButton>
    </Container>
       
;

const CreateExpButton = styled.button`
    ${PrimaryBtn}
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);

`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export default DashboardView;