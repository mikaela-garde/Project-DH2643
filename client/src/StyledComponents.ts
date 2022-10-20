import { css } from 'styled-components';

const Heading1 = css`
    font-size: ${props => props.theme.fontSizes.large};
    font-weight: 900;
    color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fonts.raleway}; 
    background-color: solid;
`;

const Heading2 = css`
    font-size: ${props => props.theme.fontSizes.medium};
    font-weight: 500;
    color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fonts.raleway}; 
    background-color: solid;
`;

const Heading3 = css`
    font-size: ${props => props.theme.fontSizes.small};
    font-weight: 500;
    color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fonts.raleway}; 
    background-color: solid;

`;

const BodyText = css`
    font-size: ${props => props.theme.fontSizes.small};
    font-weight: 300;
    color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fonts.raleway}; 
    background-color: solid;
`;

const Subtitle = css`
    font-size: ${props => props.theme.fontSizes.xsmall};
    font-weight: 400;
    color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fonts.raleway}; 
    background-color: solid;
`;

const ContentContainerAll = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.colors.background};
    height: 100vh;
    width: 100vw;
`;

//Ta bort när createexp view är klar
const ContentContainerLogin = css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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

const InputFieldWrapper = css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
    align-self: flex-start;
`;

const InputField = css`
    font-size: 15px;
    border: solid;
    border-color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.contrast};
    border-radius: 50px;
    padding: 12px 150px 12px 20px;
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

export {Heading1, Heading2, Heading3, BodyText, Subtitle, PrimaryBtn, InputField, ContentContainerAll, ContentContainerLogin, ImgContainerLogin, InputLabel, NavLink, InputFieldWrapper};
