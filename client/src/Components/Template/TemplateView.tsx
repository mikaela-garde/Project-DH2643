import React from 'react';
import styled from "styled-components";
import addMediaIcon from "../../Images/addMedia.svg";
import { Heading1, Heading2, Heading3, BodyText, Subtitle, PrimaryBtn, InputField, InputFieldWrapper, InputLabel} from '../../StyledComponents';
import { FileUploader } from "react-drag-drop-files";

const UploadView = ({handleFileChange, fileTypes, fileName, fileError, uploadImage}) =>

    <ContentContainer>
      

        <UploadMedia>
            { // @ts-expect-error 
            <FileUploader children={<FileUploadContainer>
                <img height="200px" src={addMediaIcon}></img>
                {fileError ? <SmallText errorColor={true}>{fileError}</SmallText> : <SmallText errorColor={false}>{fileName}</SmallText>}
               </FileUploadContainer>} hoverTitle=" " handleChange={handleFileChange} multiple={false} name="file" types={fileTypes} onTypeError={handleFileChange}>
            </FileUploader> }
        </UploadMedia>

       <UploadButton onClick={uploadImage}>Publish content</UploadButton>
    
    </ContentContainer>
;


const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    gap: 40px;

`;

const FileUploadContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-color: white;
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

const SmallText = styled.p.attrs((props: errorColorTag) => ({errorColor: props.errorColor}))`
    ${Subtitle};
    margin-block-start:0em;
    margin-bottom: auto;
    color: ${props => props.errorColor ? "red" : "white"}
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

interface ColorTagProps {
    colorBool: boolean;
}

interface errorColorTag {
    errorColor: boolean;
}
export default UploadView;