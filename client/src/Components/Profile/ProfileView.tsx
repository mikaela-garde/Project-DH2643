import React from 'react';
import styled from "styled-components";
import BackArrow from "../../Images/arrow-left.png";
import ProfileImg from ".//../../Images/sad_cat.jpeg";
import TiktokIcon from "../../Images/tiktok.png";
import InstagramIcon from "../../Images/instagram.png";
import ExperienceImg from "../../Images/experienceHolder.jpeg";

const ProfileView = () =>

    <ContentContainer>
        <HeaderContainer>
            <BackButton><img src={BackArrow}></img></BackButton>
            <Title>Profile</Title>
        </HeaderContainer>

        <ProfileContainer>
        <ProfileHeaderContainer>
                <ImgTextContainer>
                    <ProfileImgContainer src={ProfileImg}></ProfileImgContainer>
                    <Title2>Jessie Liu</Title2>
                </ImgTextContainer>

                <SocialMediaContainer>
                    <Title3>Social media</Title3>
                    <ImgTextContainer>
                        <IconContainer src={TiktokIcon}></IconContainer>
                        <Text>paprika23</Text>
                    </ImgTextContainer>
                    <ImgTextContainer>
                        <IconContainer src={InstagramIcon}></IconContainer>
                        <Text>23paprika</Text>
                    </ImgTextContainer>
                </SocialMediaContainer>
            </ProfileHeaderContainer>
            
            <Title3>About me</Title3>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
        </ProfileContainer>

        <Title2>Experiences</Title2>

        <ExperienceGridContainer>
            <ExperienceContainer>
                <ExperienceImgContainer src={ExperienceImg}></ExperienceImgContainer>
                <Title3>28th Bday Party</Title3>
                <Subtitle>27 Apr 2007</Subtitle>
            </ExperienceContainer>
            <ExperienceContainer>
                <ExperienceImgContainer src={ExperienceImg}></ExperienceImgContainer>
                <Title3>28th Bday Party</Title3>
                <Subtitle>27 Apr 2007</Subtitle>
            </ExperienceContainer>
            <ExperienceContainer>
                <ExperienceImgContainer src={ExperienceImg}></ExperienceImgContainer>
                <Title3>28th Bday Party</Title3>
                <Subtitle>27 Apr 2007</Subtitle>
            </ExperienceContainer>
            <ExperienceContainer>
                <ExperienceImgContainer src={ExperienceImg}></ExperienceImgContainer>
                <Title3>28th Bday Party</Title3>
                <Subtitle>27 Apr 2007</Subtitle>
            </ExperienceContainer>
            <ExperienceContainer>
                <ExperienceImgContainer src={ExperienceImg}></ExperienceImgContainer>
                <Title3>28th Bday Party</Title3>
                <Subtitle>27 Apr 2007</Subtitle>
            </ExperienceContainer>
            <ExperienceContainer>
                <ExperienceImgContainer src={ExperienceImg}></ExperienceImgContainer>
                <Title3>28th Bday Party</Title3>
                <Subtitle>27 Apr 2007</Subtitle>
            </ExperienceContainer>
        </ExperienceGridContainer>

        
    </ContentContainer>
;
const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 10px 320px;
`;

const ExperienceImgContainer = styled.img`
    height: 200px;
    width: 200px;
    object-fit: cover;
    border-radius: 30px;
`

const ExperienceContainer = styled.div`
    display: flex
    flex-direction: column;

`;

const ExperienceGridContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
`;

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    gap: 10px;
`
const ProfileHeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
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

const Subtitle = styled.p`
    font-size: 1em;
    font-weight: 400;
    color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fonts.raleway}; 
    background-color: solid;
    margin-block-start:0em;
    margin-bottom: auto;
`;

const Text = styled.p`
    font-size: 1.5em;
    font-weight: 300;
    color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fonts.raleway}; 
    background-color: solid;
    margin-block-start:0em;
    margin-bottom: auto;
`;

const ImgTextContainer = styled.div`
    display: flex
    align-items: center;
    justify-content: left;
    flex-direction: row;
`;

const Title3 = styled.h3`
    font-size: 1.5em;
    font-weight: 500;
    color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fonts.raleway}; 
    background-color: solid;
    margin: 5px 0px;
`;

const Title2 = styled.h2`
    font-size: 2em;
    font-weight: 500;
    color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fonts.raleway}; 
    background-color: solid;
    height: fit-content;
    margin: auto;
`;

const ProfileImgContainer = styled.img`
    border-radius: 50%;
    height: 150px;
    width: 150px;
    margin-right: 20px;
`;

const HeaderContainer = styled.div`
    margin: -50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

const Title = styled.h1`
    font-size: 5em;
    font-weight: 900;
    color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fonts.raleway}; 
    background-color: solid;

`;
const BackButton = styled.button`
    color: white;
    background-color: solid;
    background-color: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.primary};
    border-radius: 150px;
    height: 45px;
    width: 45px;
    border-style: solid;
    margin-right: 20px;
`;

export default ProfileView;