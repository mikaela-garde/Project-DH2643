import React from 'react';
import styled from "styled-components";
import { PrimaryBtn } from '../../StyledComponents';
import { Timeline } from "vis-timeline/standalone";

const DashboardView= ({}) =>

    <div>

        <CreateExpButton>Create Experience</CreateExpButton>
        <TimelineContainer></TimelineContainer>
        <Timeline></Timeline>
    </div>
;

const CreateExpButton = styled.button`
    ${PrimaryBtn}
`;

const TimelineContainer = styled.div`
`;


export default DashboardView;