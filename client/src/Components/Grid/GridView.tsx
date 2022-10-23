import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import ExperienceImg from "../../Images/experienceHolder.jpeg";
import ExpePlaceholderImg from "../../Images/expPlaceholder.svg";

import { Heading3 } from '../../StyledComponents';
import { Subtitle } from '../../StyledComponents';

const GridView= ({summary}) =>

    <ExperienceContainer>
        <ExperienceGridContainer>
        {console.log("exp i grid", summary)}
            {summary.map(exp => {
                return <ExperienceButtonContainer key={exp.id} to="/exp-board" onClick={() => console.log("hej", exp.id)/*setExperience(exp.title)*/}>
                    <SingleExperienceContainer>
                        <ExperienceImgContainer src={exp.img == "" ? ExpePlaceholderImg : exp.img}></ExperienceImgContainer>
                        <Title3>{exp.name}</Title3>
                        <SmallText>{exp.start_date} - </SmallText>
                    </SingleExperienceContainer>
                </ExperienceButtonContainer>
            })}

            <ExperienceButtonContainer to="/exp-board" onClick={() => console.log("hej")/*setExperience()*/}>
                <SingleExperienceContainer>
                    <ExperienceImgContainer src={ExpePlaceholderImg}></ExperienceImgContainer>
                    <Title3>28th Bday Party</Title3>
                    <SmallText>27 Apr 2007</SmallText>
                </SingleExperienceContainer>
            </ExperienceButtonContainer>

            <ExperienceButtonContainer to="/exp-board">
                <SingleExperienceContainer>
                    <ExperienceImgContainer src={ExperienceImg}></ExperienceImgContainer>
                    <Title3>28th Bday Party</Title3>
                    <SmallText>27 Apr 2007</SmallText>
                </SingleExperienceContainer>
            </ExperienceButtonContainer>

            <ExperienceButtonContainer to="/exp-board">
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

            <ExperienceButtonContainer to="/login">
                <SingleExperienceContainer>
                    <ExperienceImgContainer src={ExperienceImg}></ExperienceImgContainer>
                    <Title3>28th Bday Party</Title3>
                    <SmallText>27 Apr 2007</SmallText>
                </SingleExperienceContainer>
            </ExperienceButtonContainer>
        </ExperienceGridContainer>
    </ExperienceContainer>


const ExperienceImgContainer = styled.img`
    height: 200px;
    width: 200px;
    object-fit: cover;
    border-radius: 30px;
`;

const SingleExperienceContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 20px;
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
    justify-content: space-between;
    :after {
        content: "";
        flex: auto;
      }
    z-index: 2;
`;

const ExperienceContainer = styled.div`
      display: flex; 
      flex-direction: column;
      justify-content: center;
      gap: 30px;
      
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