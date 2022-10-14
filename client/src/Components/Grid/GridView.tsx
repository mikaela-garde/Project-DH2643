import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import ExperienceImg from "../../Images/experienceHolder.jpeg";


import { Heading1 } from '../../StyledComponents';
import { Heading2 } from '../../StyledComponents';
import { Heading3 } from '../../StyledComponents';
import { BodyText } from '../../StyledComponents';
import { Subtitle } from '../../StyledComponents';

const GridView= ({}) =>

    <ExperienceContainer>
        <ExperienceGridContainer>
            <ExperienceButtonContainer to="/login">
                <SingleExperienceContainer>
                    <ExperienceImgContainer src={ExperienceImg}></ExperienceImgContainer>
                    <Title3>28th Bday Party</Title3>
                    <SmallText>27 Apr 2007</SmallText>
                </SingleExperienceContainer>
            </ExperienceButtonContainer>
            <ExperienceButtonContainer to="/login">
                <SingleExperienceContainer>
                    <ExperienceImgContainer src={ExperienceImg}></ExperienceImgContainer>
                    <Title3>28th Bday Party</Title3>
                    <SmallText>27 Apr 2007</SmallText>
                </SingleExperienceContainer>
            </ExperienceButtonContainer>
            <ExperienceButtonContainer to="/login">
                <SingleExperienceContainer>
                    <ExperienceImgContainer src={ExperienceImg}></ExperienceImgContainer>
                    <Title3>28th Bday Party</Title3>
                    <SmallText>27 Apr 2007</SmallText>
                </SingleExperienceContainer>
            </ExperienceButtonContainer>
        </ExperienceGridContainer>
    </ExperienceContainer>
        
;


const ExperienceImgContainer = styled.img`
    height: 200px;
    width: 200px;
    object-fit: cover;
    border-radius: 30px;
`;

const SingleExperienceContainer = styled.div`
    display: flex
    flex-direction: column;
    justify-content; left;
    margin-left: 10px;
    margin-right: 10px;
`;

const ExperienceButtonContainer = styled(Link)`
    display: flex;
    text-decoration: 'none';
    height: fit-content;
    justify-content: center;
    &:focus, &:visited, &:link, &:active {
        text-decoration: none;
    }
    &:hover {
        opacity: 50%;
        transition: background-color 400ms ease-out 100ms;
    }
`;

const ExperienceGridContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content; space-between;

    :after {
        content: "";
        flex: auto;
      }
`;

const ExperienceContainer = styled.div`
      display: flex; 
      flex-direction: column;
      justify-content: center;
      gap: 30px;
      
`;


const PageTitle = styled.h1`
    ${Heading1}
`;

const Title2 = styled.h2`
    ${Heading2};
    margin: auto;
    padding-top: 10px;
`;

const Title3 = styled.h3`
    ${Heading3};
    margin: 5px 0px;
`;

const SmallText = styled.p`
    ${Subtitle};
    margin-block-start:0em;
    margin-bottom: auto;
`;




export default GridView;