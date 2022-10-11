import React from 'react';
import ReactDOM from 'react-dom/client';
import { getAPI } from './webAPI/webAPI';
import TemplatePresenter from './Components/Template/TemplatePresenter';
import LoginPresenter from './Components/Login/LoginPresenter';
import ProfilePresenter from './Components/Profile/ProfilePresenter';
import SignupPresenter from './Components/Signup/SignupPresenter';
import Theme from "./Theme";
import{ createGlobalStyle } from "styled-components";
import {
    HashRouter,
    Routes,
    Route,
    BrowserRouter
  } from "react-router-dom";
import DashboardPresenter from './Components/Dashboard/DashboardPresenter';
import MenuView from "./Components/Menu/MenuView";

import { Timeline } from "vis-timeline/esnext";

const App = () => {
    const [fetchedData, setFetchedData] = React.useState("");
    
    React.useEffect(() => {

        getAPI().then(data => {
            setFetchedData(data.someData);
        }).catch(e => {
            console.log(e)
        });
    }, [])

    return (
    <Theme> 
        <GlobalStyle/>
        <HashRouter>
            <Routes>
                <Route path="/login" element={<LoginPresenter />} />
                <Route path="/signup" element={<SignupPresenter />} />
            </Routes>
            <div>
            <MenuView/>
            <Routes>
                
                <Route path="/dashboard" element={<DashboardPresenter />} />
                <Route path="/template" element={<TemplatePresenter />} />
                <Route path="/profile" element={<ProfilePresenter />} />
                
            </Routes>
            </div>
        </HashRouter>
    </Theme>
    )
}

const GlobalStyle = createGlobalStyle `
    body {
    margin: 0;
    padding: 0;
    }
`;



ReactDOM.createRoot(document.getElementById('app')!).render(<App />);

