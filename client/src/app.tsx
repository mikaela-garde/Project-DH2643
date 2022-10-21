import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import {Navigate} from 'react-router-dom'; 
import TemplatePresenter from './Components/Template/TemplatePresenter';
import LoginPresenter from './Components/Login/LoginPresenter';
import ProfilePresenter from './Components/Profile/ProfilePresenter';
import SignupPresenter from './Components/Signup/SignupPresenter';
import CreateExpPresenter from './Components/CreateExp/CreateExpPresenter';
import DashboardPresenter from './Components/Dashboard/DashboardPresenter';
import ExpBoardPresenter from './Components/ExpBoard/ExpBoardPresenter';
//import EmptyProfileImage from "./Images/NewEmptyProfileImg.svg";
import { lightTheme, darkTheme } from './Theme';
import {ThemeProvider} from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import{ createGlobalStyle } from "styled-components";
import { HashRouter, Routes, Route } from "react-router-dom";
import { io } from "socket.io-client";
import Model from './UserModel';
import useModelProp from './useModelProp';
import NoDataView from './Components/NoData/NoDataView';
import ExperienceModel from "./ExperienceModel";
import { Experience_Template } from './types';

let UserModel = new Model();
let experienceModel = new ExperienceModel();

const socket = io("https://localhost:8081");

const GlobalStyle = createGlobalStyle `
    body * {
        margin: 0;
        padding: 0;
    }
`;

const App = () => {
    const darkMode = useModelProp(UserModel, "dark_mode");
    const loggedIn = useModelProp(UserModel, "isLoggedIn");

    useEffect(() => {
        if(localStorage.getItem("refreshToken")) {
            UserModel.getUserFromToken(localStorage.getItem("refreshToken"));
            console.log("Det finns en refresh token");
        } else {
            console.log("ingen refreshToken");
            UserModel.setIsLoggedIn(false);
        }
        const socket = io("https://localhost:8081");
        console.log("vid socketen");
        // Specify how to clean up after this effect:
        return function cleanup() {
            socket.disconnect()
        }
    }, []);

    return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}> 
        <GlobalStyle/>
        <HashRouter>
            <Routes>
                <Route path="/" element={loggedIn == undefined ? <NoDataView />: loggedIn ? <DashboardPresenter />: <LoginPresenter />} />
                <Route path="/signup" element={loggedIn == undefined ? <NoDataView />:loggedIn ? <Navigate to="/"/>: <SignupPresenter />} />
                <Route path="/template" element={loggedIn == undefined ? <NoDataView />:loggedIn ? <TemplatePresenter />: <Navigate to="/"/>} />
                <Route path="/profile" element={loggedIn == undefined ? <NoDataView />:loggedIn ? <ProfilePresenter />: <Navigate to="/"/> } />
                <Route path="/create-exp" element={loggedIn == undefined ? <NoDataView />:loggedIn ? <CreateExpPresenter />: <Navigate to="/"/> } />
                <Route path="/exp-board" element={loggedIn == undefined ? <NoDataView />:loggedIn ? <ExpBoardPresenter />: <Navigate to="/"/> } />
            </Routes>
        </HashRouter>
    </ThemeProvider>
    )
}

ReactDOM.createRoot(document.getElementById('app')!).render(<App />);

export {UserModel, experienceModel, socket};