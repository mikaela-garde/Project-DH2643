import React from 'react';
import styled from "styled-components";
import profileicon from "../../Images/NewEmptyProfileImg.svg";
import { Heading1, Heading2, Heading3, BodyText, Subtitle, PrimaryBtn, InputField, InputFieldWrapper, InputLabel} from '../../StyledComponents';
import { FileUploader } from "react-drag-drop-files";
import { Gallery } from "react-grid-gallery";


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
  }))} enableImageSelection={false} rowHeight={230} margin={1} ></Gallery>
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
  margin: 5px;
  align-items: center;
  gap: 5px;
`;

const Caption = styled.p`
  ${BodyText};
  color: white;
  font-size: 75%;
  margin-left: 5px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  bottom: 0;
  width: 100%;

  max-height: 50px;
  overflow: auto;
  
`;