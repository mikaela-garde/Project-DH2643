import { css } from 'styled-components';

const Heading1 = css`
    font-size: 5em;
    font-weight: 900;
    color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fonts.raleway}; 
    background-color: solid;
`;

const Heading2 = css`
    font-size: 2.25em;
    font-weight: 500;
    color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fonts.raleway}; 
    background-color: solid;
`;

const Heading3 = css`
    font-size: 1.5em;
    font-weight: 500;
    color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fonts.raleway}; 
    background-color: solid;

`;

const BodyText = css`
    font-size: 1.5em;
    font-weight: 300;
    color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fonts.raleway}; 
    background-color: solid;
`;

const Subtitle = css`
    font-size: 1em;
    font-weight: 400;
    color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fonts.raleway}; 
    background-color: solid;
`;

const PrimaryBtn = css`
    color: white;
    font-size: 1em;
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

const InputField = css`
    font-size: 15px;
    border: solid;
    border-color: ${props => props.theme.colors.primary};
    padding: 12px;
    border-radius: 50px;
    padding-right: 9%;
`;

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

const ImgContainerLogin = css`
    display: flex;
    width: 12%;
    align-self: center;
`;

export {Heading1, Heading2, Heading3, BodyText, Subtitle, PrimaryBtn, InputField, ContentContainerLogin, ImgContainerLogin};
