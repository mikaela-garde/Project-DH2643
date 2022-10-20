import React from 'react';
import styled from "styled-components";
import ProfileImg from ".//../../Images/sad_cat.jpeg";
import TiktokIcon from "../../Images/tiktok.png";
import InstagramIcon from "../../Images/instagram.png";
import {Link} from "react-router-dom";
import HeaderPresenter from '../Header/HeaderPresenter';
import GridPresenter from '../Grid/GridPresenter';

import { Heading2, Heading3, BodyText, ContentContainerAll } from '../../StyledComponents';

const ProfileView = ({userProfileImg, userFirstName, userLastName, userSocialMedia, userDescription, userExperienceList}) =>

    <ContentContainer>
        <HeaderPresenter NavTitle={"Profile"}/>

        <ProfileContainer>
            <ProfileHeaderContainer>
                <ImgTextContainer>
                    <ProfileImgContainer src={userProfileImg}></ProfileImgContainer>
                    <Title2>{userFirstName} + {userLastName}</Title2>
                </ImgTextContainer>

                <SocialMediaContainer>
                    <Title3>Social media</Title3>
                    <ImgTextContainer>
                        <IconContainer src={TiktokIcon}></IconContainer>
                        <Text>hej</Text>
                    </ImgTextContainer>
                    <ImgTextContainer>
                        <IconContainer src={InstagramIcon}></IconContainer>
                        <Text>hej</Text>
                    </ImgTextContainer>
                </SocialMediaContainer>
            </ProfileHeaderContainer>
            
            <Title3>About me</Title3>
            <Text>{userDescription}</Text>
        </ProfileContainer>
        <GridPresenter />
    </ContentContainer>
;
const ContentContainer = styled.div`
    ${ContentContainerAll};
    justify-content: flex-start;
    overflow: auto;
`;

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    gap: 10px;
    margin-top: 5%;
    margin-bottom: 5%;
`
const ProfileHeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: center;
    flex-wrap: wrap;
`;

const SocialMediaContainer = styled.div`
    display: flex;
    align-items: left;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
`;

const IconContainer = styled.img`
    height: 30px;
    margin-right: 10px;
`;

const ImgTextContainer = styled.div`
    display: flex
    align-items: center;
    justify-content: left;
    flex-direction: row;
`;

const ProfileImgContainer = styled.img`
    border-radius: 50%;
    height: 150px;
    width: 150px;
    margin-right: 20px;
`;

const Title2 = styled.h2`
    ${Heading2};
    margin: auto;
`;

const Title3 = styled.h3`
    ${Heading3};
    margin: 5px 0px;
`;

const Text = styled.p`
    ${BodyText};
    margin-block-start: 0em;
    margin-bottom: auto;
`;


export default ProfileView;