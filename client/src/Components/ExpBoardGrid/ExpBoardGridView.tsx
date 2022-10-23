import React from 'react';
import styled from "styled-components";
import profileicon from "../../Images/NewEmptyProfileImg.svg";
import { Heading1, Heading2, Heading3, BodyText, Subtitle, PrimaryBtn, InputField, InputFieldWrapper, InputLabel} from '../../StyledComponents';
import { FileUploader } from "react-drag-drop-files";
import { Gallery } from "react-grid-gallery";
import SVG from "react-inlinesvg";


const ExpBoardGridView = ({images}) =>

  <Gallery images={images.map((image) => ({...image,
    customOverlay: 
    <InfoContainer>
      <ProfileContainer>
        <ProfileImg src={profileicon} ></ProfileImg>
        <Username>NAME</Username>
      </ProfileContainer>
      <Caption>{image.caption}</Caption>
    </InfoContainer>
  }))} enableImageSelection={false} rowHeight={230} margin={1}></Gallery>
;


export default ExpBoardGridView;

const Username = styled.h3`
  ${Heading3};
  color: white;
  font-size: 80%;


`; 

const ProfileImg = styled.img`
  height: 20px;

`;

const ProfileContainer = styled.div`
  display: flex;
  margin: 15px;
  align-items: center;
  gap: 5px;
`;

const Caption = styled.p`
  ${BodyText};
  color: white;
  font-size: 75%;
  margin: 0px 15px;
  overflow-wrap: break-word;
  overflow:auto;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

