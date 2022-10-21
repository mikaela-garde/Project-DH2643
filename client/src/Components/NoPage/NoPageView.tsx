import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";

import { ContentContainerAll, Heading1} from '../../StyledComponents';

const NoPageView = ({}) =>
            <ContentContainer>
                <PageTitle>Error 404: page not found :{"("}</PageTitle>
            </ContentContainer>
;

const ContentContainer = styled.div`
    ${ContentContainerAll};
    >*  {
        margin: 15px;
        };
`;

const PageTitle = styled.h1`
    ${Heading1}
`;

export default NoPageView;