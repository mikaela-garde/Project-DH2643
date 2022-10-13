import React from 'react';
import styled from "styled-components";
import { PrimaryBtn } from '../../StyledComponents';

const DashboardView= ({}) =>

    <div>

        <CreateExpButton>Create Experience</CreateExpButton>
        <TimelineContainer></TimelineContainer>
    </div>
;

const CreateExpButton = styled.button`
    ${PrimaryBtn}
`;

const TimelineContainer = styled.div`
`;


export default DashboardView;