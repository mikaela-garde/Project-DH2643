import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import TemplatePresenter from './Components/Template/TemplatePresenter';
import LoginPresenter from './Components/Login/LoginPresenter';
import ProfilePresenter from './Components/Profile/ProfilePresenter';
import SignupPresenter from './Components/Signup/SignupPresenter';
import UploadPresenter from './Components/Upload/UploadPresenter';
import CreateExpPresenter from './Components/CreateExp/CreateExpPresenter';
import DashboardPresenter from './Components/Dashboard/DashboardPresenter';
import ExpBoardPresenter from './Components/ExpBoard/ExpBoardPresenter';
import EmptyProfileImage from "./Images/NewEmptyProfileImg.svg";
//import Theme from "./Theme";
import { lightTheme, darkTheme } from './Theme';
import {ThemeProvider} from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import{ createGlobalStyle } from "styled-components";
import { HashRouter, Routes, Route } from "react-router-dom";
import { io } from "socket.io-client";
import Model from './UserModel';
import useModelProp from './useModelProp';

let UserModel = new Model({
    id: "123",
    email: "test@gmail.com",
    first_name: "Joe",
    last_name: "Dad",
    social_media: [],
    description: "Hi, I'm a test",
    profile_img: EmptyProfileImage,
    friends: [1, 2, 3],
    friend_requests: [],
    experiences: [1, 2, 3],
    notifications: [],
    dark_mode: false
});

const socket = io("https://localhost:8081");

const GlobalStyle = createGlobalStyle `
    body * {
        margin: 0;
        padding: 0;
    }
`;

const App = () => {
    const darkMode = useModelProp(UserModel, "dark_mode");
    console.log("Det här är i app: "+darkMode)

    useEffect(() => {
        if(localStorage.getItem("refreshToken")) {
            UserModel.getUserFromToken(localStorage.getItem("refreshToken"));
            console.log("Det finns en refresh token");
        } else {
            console.log("ingen refresh");
        }
        const socket = io("https://localhost:8081");
        // Specify how to clean up after this effect:
        return function cleanup() {
            socket.disconnect()
        }
    });

    return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}> 
        <GlobalStyle/>
        <HashRouter>
            <Routes>
                <Route path="/login" element={<LoginPresenter />} />
                <Route path="/signup" element={<SignupPresenter />} />
            </Routes>
            <div>
             
                <Routes>
                    <Route path="/dashboard" element={<DashboardPresenter />} />
                    <Route path="/template" element={<TemplatePresenter />} />
                    <Route path="/profile" element={<ProfilePresenter />} />
                    <Route path="/upload" element={<UploadPresenter />} />
                    <Route path="/create-exp" element={<CreateExpPresenter />} />
                    <Route path="/exp-board" element={<ExpBoardPresenter />} />

                </Routes>
            </div>
        </HashRouter>
    </ThemeProvider>
    )
}

ReactDOM.createRoot(document.getElementById('app')!).render(<App />);

export {UserModel, socket};