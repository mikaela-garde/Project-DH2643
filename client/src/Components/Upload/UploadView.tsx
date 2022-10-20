import React from 'react';
import styled from "styled-components";
import addMediaIcon from "../../Images/addMedia.svg";
import { Heading1, Heading3, BodyText, Subtitle, PrimaryBtn, InputField, InputFieldWrapper, InputLabel, ContentContainerAll} from '../../StyledComponents';
import { FileUploader } from "react-drag-drop-files";
import BackButtonArrow from "../../Images/back-button-arrow.svg";

const UploadView = ({isActive, setIsActive, setText, handleFileChange, fileTypes, fileName, fileError, showAdd}) =>

    <ContentContainer>
        <TitleBackBtnContainer>
            <BackButton onClick={showAdd} src={BackButtonArrow}></BackButton>
            <PageTitle>Upload content</PageTitle>
       </TitleBackBtnContainer>
       

       <UploadTypeButtonContainer>
            <MediaButton colorBool={isActive} onClick={() => isActive ? setIsActive(isActive) : setIsActive(!isActive)}>Media</MediaButton>
            <TextButton colorBool={isActive} onClick={() => isActive ? setIsActive(!isActive) : setIsActive(isActive)}>Text</TextButton>
        </UploadTypeButtonContainer>

        <UploadMedia>
            { // @ts-expect-error 
            isActive && <FileUploader children={<FileUploadContainer>
                <img height="200px" src={addMediaIcon}></img>
                {fileError ? <SmallText errorColor={true}>{fileError}</SmallText> : <SmallText errorColor={false}>{fileName}</SmallText>}
                <Title3>Drag & Drop files here</Title3>
                <Text>Allowed file types: Photos, videos, recordings</Text>
            </FileUploadContainer>} hoverTitle=" " handleChange={handleFileChange} multiple={false} name="file" types={fileTypes} onTypeError={handleFileChange}>
            </FileUploader> }
            <TextInputWrapper>
                <TextInput placeholder="Write caption" onChange={e => setText(e.target.value)}></TextInput>
            </TextInputWrapper>
        </UploadMedia>

       <UploadButton>Publish content</UploadButton>
    </ContentContainer>
;


/* Old version
{isActive && <FileUpload>
                <img height="200px" src={addMediaIcon}></img>
                <SmallText>filename</SmallText>
                <Title3>Drag & Drop files here</Title3>
                <Text>Allowed file types: Photos, videos, recordings</Text>
            </FileUpload>}
            */ 

/* Padding: 50px
    372px x 500 */

const ContentContainer = styled.div`
    ${ContentContainerAll};
    background-color: rgba(0, 0, 0, 0.5);
    gap: 40px;
    width: 100vw;
    position: fixed;
    z-index: 1;
`;

const TitleBackBtnContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const TextInput = styled.textarea`
    ${InputField};
    height: 500px;
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

const BackButton = styled.img`
    height: 50px;
    align-self: center;
    margin-right: 20px;
    :hover {
        cursor: pointer;
    }
`;

const FileUploadContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-color: ${props => props.theme.colors.contrast};
    border-style: dashed;
    border-radius: 50px;
    width: 375px;
    height: 400px;
    padding: 50px;
    gap: 40px;
    :hover {
        cursor: pointer;
    }
`;
const UploadMedia = styled.div`
    display: flex;
    justify-content: center;
    height: 500px;
    width: 1000px;
    gap: 50px;
`;

const MediaButton = styled.button.attrs((props: ColorTagProps) => ({colorBool: props.colorBool}))`
    color: ${props => props.colorBool ? props.theme.colors.contrast : props.theme.colors.primary};
    font-size: ${props => props.theme.fontSizes.xsmall};
    font-weight: 400;
    font-family: ${props => props.theme.fonts.raleway}; 
    background-color: solid;
    background-color: ${props => props.colorBool ? props.theme.colors.primary : props.theme.colors.contrast};
    border-color: ${props => props.colorBool ? props.theme.colors.primary : props.theme.colors.contrast};
    border-radius: 150px 0px 0px 150px;
    height: 45px;
    width: 250px;
    cursor: pointer;
    border-style: solid;
`;

const TextButton = styled.button.attrs((props: ColorTagProps) => ({colorBool: props.colorBool}))`
    color: ${props => props.colorBool ? props.theme.colors.primary : props.theme.colors.contrast};
    font-size: 1em;
    font-weight: 400;
    font-family: ${props => props.theme.fonts.raleway}; 
    background-color: solid;
    background-color: ${props => props.colorBool ? props.theme.colors.contrast : props.theme.colors.primary};
    border-color:  ${props => props.colorBool ? props.theme.colors.contrast : props.theme.colors.primary};
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
    color: props.theme.colors.contrast;
    margin: 0;
`;

const Title3 = styled.h3`
    ${Heading3};
    color: props.theme.colors.contrast;
    margin: 5px 0px;
    text-align: center;
`;

const SmallText = styled.p.attrs((props: errorColorTag) => ({errorColor: props.errorColor}))`
    ${Subtitle};
    margin-block-start:0em;
    margin-bottom: auto;
    color: ${props => props.errorColor ? "red" : props.theme.colors.contrast}
`;

const Text = styled.p`
    ${BodyText};
    color: props.theme.colors.contrast;
    margin-block-start:0em;
    margin-bottom: 0s;
    font-size: 1em;
`;

interface ColorTagProps {
    colorBool: boolean;
}

interface errorColorTag {
    errorColor: boolean;
}
export default UploadView;