import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import {Navigate} from 'react-router-dom'; 
import TemplatePresenter from './Components/Template/TemplatePresenter';
import LoginPresenter from './Components/Login/LoginPresenter';
import ProfilePresenter from './Components/Profile/ProfilePresenter';
import SignupPresenter from './Components/Signup/SignupPresenter';
import UploadPresenter from './Components/Upload/UploadPresenter';
import CreateExpPresenter from './Components/CreateExp/CreateExpPresenter';
import DashboardPresenter from './Components/Dashboard/DashboardPresenter';
import ExpBoardPresenter from './Components/ExpBoard/ExpBoardPresenter';
import EmptyProfileImage from "./Images/EmptyProfileImg.svg";
import Theme from "./Theme";
import "react-datepicker/dist/react-datepicker.css";
import{ createGlobalStyle } from "styled-components";
import {
    HashRouter,
    Routes,
    Route,
  } from "react-router-dom";
import { io } from "socket.io-client";
import Model from './UserModel';
import useModelProp from './useModelProp';

let UserModel = new Model();

const socket = io("https://localhost:8081");

const App = () => {
    const loggedIn = useModelProp(UserModel, "isLoggedIn");
    useEffect(() => {
        if(localStorage.getItem("refreshToken")) {
            UserModel.getUserFromToken(localStorage.getItem("refreshToken"));
            console.log("Det finns en refresh token");
        } else {
            console.log("ingen refreshToken");
        }
        const socket = io("https://localhost:8081");
        // Specify how to clean up after this effect:
        return function cleanup() {
            socket.disconnect()
        }
    });

    return (
    <Theme> 
        <GlobalStyle/>
        <HashRouter>
            <Routes>
                <Route path="/" element={loggedIn ? <DashboardPresenter/>: <LoginPresenter />} />
                <Route path="/signup" element={loggedIn ? <Navigate to="/"/>: <SignupPresenter />} />
                <Route path="/template" element={loggedIn ? <TemplatePresenter />: <Navigate to="/"/>} />
                <Route path="/profile" element={loggedIn ? <ProfilePresenter />: <Navigate to="/"/> } />
                <Route path="/upload" element={loggedIn ? <UploadPresenter />: <Navigate to="/"/> } />
                <Route path="/create-exp" element={loggedIn ? <CreateExpPresenter />: <Navigate to="/"/> } />
                <Route path="/exp-board" element={loggedIn ? <ExpBoardPresenter />: <Navigate to="/"/> } />
            </Routes>
        </HashRouter>
    </Theme>
    )
}

const GlobalStyle = createGlobalStyle `
    body *{
    margin: 0;
    padding: 0;
    }
`;

ReactDOM.createRoot(document.getElementById('app')!).render(<App />);

export {UserModel, socket};