import React from 'react';
import styled from "styled-components";
import ProfileImg from ".//../../Images/sad_cat.jpeg";
import TiktokIcon from "../../Images/tiktok.png";
import InstagramIcon from "../../Images/instagram.png";
import {Link} from "react-router-dom";
import HeaderPresenter from '../Header/HeaderPresenter';


import { Heading1 } from '../../StyledComponents';
import { Heading2 } from '../../StyledComponents';
import { Heading3 } from '../../StyledComponents';
import { BodyText } from '../../StyledComponents';
import { Subtitle } from '../../StyledComponents';
import GridView from '../Grid/GridView';

const ProfileView = () =>

    <ContentContainer>
        <HeaderPresenter NavTitle={"Profile"}/>

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
        <GridView />
    </ContentContainer>
;
const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 70px;
    margin: 10px 320px;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0px;
    >*  {
        margin: 10px;
        };
`;

const BackButton = styled.img`
    width: 70%;
`;

const NavLink = styled(Link)`
    display: flex;
    a {
        align-self: center;
    }
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

const SmallText = styled.p`
    ${Subtitle};
    margin-block-start:0em;
    margin-bottom: auto;
`;

const Text = styled.p`
    ${BodyText};
    margin-block-start:0em;
    margin-bottom: auto;
`;


export default ProfileView;