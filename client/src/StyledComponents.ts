import { css } from 'styled-components';

const FlexRow = css`
    display: flex;
    flex-direction: row;
`;

const FlexColumn = css`
    display: flex;
    flex-direction: column;
`;

const PrimaryColorFont = css`
    color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fonts.raleway}; 
`;

const Heading1 = css`
    ${PrimaryColorFont};
    font-size: ${props => props.theme.fontSizes.large};
    font-weight: 900;
    z-index: 2;
`;

const Heading2 = css`
    ${PrimaryColorFont};
    font-size: ${props => props.theme.fontSizes.medium};
    font-weight: 500;
`;

const Heading3 = css`
    ${PrimaryColorFont};
    font-size: ${props => props.theme.fontSizes.small};
    font-weight: 500;
`;

const BodyText = css`
    ${PrimaryColorFont};
    font-size: ${props => props.theme.fontSizes.small};
    font-weight: 300;
`;

const Subtitle = css`
    ${PrimaryColorFont}
    font-size: ${props => props.theme.fontSizes.xsmall};
    font-weight: 400;
`;

const ContentContainerAll = css`
    ${FlexColumn};
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.colors.background};
    height: 100vh;
    width: 100vw;
    overflow: hidden; /* animationen skapar en scrollbar om inte denna finns*/
`;

//Ta bort när createexp view är klar
const ContentContainerLogin = css`
    ${FlexColumn};
    align-items: center;
    justify-content: center;
    height: 100vh;
    >*  {
        margin: 15px;
        };
`;

const PrimaryBtn = css`
    color: ${props => props.theme.colors.contrast};
    font-size: ${props => props.theme.fontSizes.xsmall};;
    font-weight: 400;
    font-family: ${props => props.theme.fonts.raleway}; 
    background-color: solid;
    background-color: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.primary};
    border-radius: 150px;
    height: 45px;
    width: 250px;
    cursor: pointer;
    border-style: solid;
    z-index: 2;

    &:hover {
        background-color: transparent;
        color: ${props => props.theme.colors.primary};
        transition: background-color 400ms ease-out 100ms
    }

    &:active {
        transform: translateY(2px);
        opacity: 95%;
        transition: font-size 100ms ease-out;
    }
`;

const PrimaryBtnContainer = css`
    ${FlexRow}
    margin: 0px;
    >*  {
        margin: 10px;
        };  
        z-index: 2;
`;

const BtnPosBottomCenter = css`
    align-self: center;
    margin-top: auto;
    margin-bottom: 30px;
`;


const InputFieldWrapper = css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
    align-self: center;
`;

const InputField = css`
    font-size: 15px;
    border: solid;
    border-color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.contrast};
    border-radius: 50px;
    padding: 12px 20px;
    color: ${props => props.theme.colors.primary};
`;

const InputLabel = css`
    color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fonts.raleway}; 
    position: absolute;
    font-weight: 500;
    background-color: ${props => props.theme.colors.contrast};
    border-radius:20px;
    bottom: 35px;
    left: 25px;
    padding: 0px 8px 0px 8px;
`;

const ImgContainerLogin = css`
    display: flex;
    width: 200px;
    align-self: center;
    z-index: 2;
`;

const NavLink = css`
    display: flex;
    color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fonts.raleway};
    font-weight: 600;
    font-size: ${props => props.theme.fontSizes.xsmall};
    letter-spacing: 2px;
    text-decoration:none;
    a {
        align-self: center;
        text-decoration:none;
    }
`;

const BackButton = css`
    height: 50px;
    align-self: center;
    margin-right: 20px;
    & circle {
        fill: ${props => props.theme.colors.primary};
    }
    & path{
        fill: ${props => props.theme.colors.contrast};
    }
`;

const NavContainer = css`
    ${FlexRow}
    margin-top: 13px;
    align-self: center;
`;

const GridPresenterContainer = css`
    margin: 50px 150px;
    overflow: auto;
    ::-webkit-scrollbar { 
        display: none;
    }
`;

export {BtnPosBottomCenter, GridPresenterContainer, NavContainer, BackButton, Heading1, Heading2, Heading3, BodyText, Subtitle, PrimaryBtn, InputField, ContentContainerAll, ContentContainerLogin, ImgContainerLogin, InputLabel, NavLink, InputFieldWrapper, PrimaryBtnContainer};
