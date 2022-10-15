import React from 'react';
import styled from "styled-components";
import addMediaIcon from "../../Images/addMedia.svg";

import { Heading1, Heading2, Heading3, BodyText, Subtitle, PrimaryBtn, InputField, InputFieldWrapper, InputLabel} from '../../StyledComponents';

const UploadView = ({isActive, setIsActive, setText}) =>

    <ContentContainer>
        
       <PageTitle>Upload content</PageTitle>

       <UploadTypeButtonContainer>
            <MediaButton colorBool={isActive} onClick={() => isActive ? setIsActive(isActive) : setIsActive(!isActive)}>Media</MediaButton>
            <TextButton colorBool={isActive} onClick={() => isActive ? setIsActive(!isActive) : setIsActive(isActive)}>Text</TextButton>
        </UploadTypeButtonContainer>

        <UploadMedia>
            {isActive && <FileUpload>
                <img height="200px" src={addMediaIcon}></img>
                <SmallText>filename</SmallText>
                <Title3>Drag & Drop files here</Title3>
                <Text>Allowed file types: Photos, videos, recordings</Text>
            </FileUpload>}
            <TextInputWrapper>
                <TextInput placeholder="Write text" onChange={e => setText(e.target.value)}></TextInput>
            </TextInputWrapper>
        </UploadMedia>

       <UploadButton>Publish content</UploadButton>
                
    </ContentContainer>
;
/* Gör icon till knapp genom att sätta buttons background image till iconen*/ 



const FileUpload = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-color: white;
    border-style: dashed;
    border-radius: 50px;
    width: 40%;
    padding: 5%;
    gap: 40px;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    gap: 40px;

`;
const TextInput = styled.textarea`
    ${InputField};
    height:100%;
    width: 100%;
    resize: none;
    box-sizing: border-box;
    text-align: left;
    padding: 20px 20px 20px 30px;
    font-family: ${props => props.theme.fonts.raleway}; 
`;

const TextInputWrapper = styled.div`
    ${InputFieldWrapper};
    width: 50%;
    height:100%;
`;

const UploadMedia = styled.div`
    display: flex;
    justify-content: center;
    height: 500px;
    width: 1000px;
    gap: 50px;
`;

const MediaButton = styled.button.attrs((props: ColorTagProps) => ({colorBool: props.colorBool}))`
    color: ${props => props.colorBool ? "white" : props.theme.colors.primary};
    font-size: 1em;
    font-weight: 400;
    font-family: ${props => props.theme.fonts.raleway}; 
    background-color: solid;
    background-color: ${props => props.colorBool ? props.theme.colors.primary : "white"};
    border-color: ${props => props.colorBool ? props.theme.colors.primary : "white"};
    border-radius: 150px 0px 0px 150px;
    height: 45px;
    width: 250px;
    cursor: pointer;
    border-style: solid;
    onClick={ () => onToggle()
`;

const TextButton = styled.button.attrs((props: ColorTagProps) => ({colorBool: props.colorBool}))`
    color: ${props => props.colorBool ? props.theme.colors.primary : "white"};
    font-size: 1em;
    font-weight: 400;
    font-family: ${props => props.theme.fonts.raleway}; 
    background-color: solid;
    background-color: ${props => props.colorBool ? "white" : props.theme.colors.primary};
    border-color:  ${props => props.colorBool ? "white" : props.theme.colors.primary};
    height: 45px;
    width: 250px;
    border-radius: 0px 150px 150px 0px;
    cursor: pointer;
    border-style: solid;
`;

const UploadTypeButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 250px;
`;

const UploadButton = styled.button`
    ${PrimaryBtn}
    margin: 20px;
`;
const PageTitle = styled.h1`
    ${Heading1}
    color: white;
    margin: 0;
`;

const Title2 = styled.h2`
    ${Heading2};
    color: white;
    margin: auto;
`;

const Title3 = styled.h3`
    ${Heading3};
    color: white;
    margin: 5px 0px;
    text-align: center;
`;

const SmallText = styled.p`
    ${Subtitle};
    margin-block-start:0em;
    margin-bottom: auto;
    color: white;
`;

const Text = styled.p`
    ${BodyText};
    color: white;
    margin-block-start:0em;
    margin-bottom: 0s;
    font-size: 1em;
`;

type Props = {
    classname?: string,
    as?: string
}

interface ColorTagProps{
    colorBool: boolean;
}
export default UploadView;