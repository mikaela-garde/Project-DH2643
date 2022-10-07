import React from 'react';
import ReactDOM from 'react-dom/client';
import { getAPI } from './webAPI/webAPI';
import TemplatePresenter from './Components/Template/TemplatePresenter';
import LoginPresenter from './Components/Login/LoginPresenter';
import Theme from "./Theme";
import{ createGlobalStyle } from "styled-components";
import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";
import Dashboard from "./Components/Template/Dashboard/DashboardPresenter";


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
        <LoginPresenter></LoginPresenter>
        <div>
            <TemplatePresenter></TemplatePresenter>
            <p>Experience Saversss</p><div>{`${fetchedData}`}</div>
        </div>
        <Router>
            <Route path="/dashboard" element={<Dashboard />} />
            <div>
                <TemplatePresenter></TemplatePresenter>
                <p>Experience Saversss</p><div>{`${fetchedData}`}</div>
            </div> 
        </Router>
        
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

