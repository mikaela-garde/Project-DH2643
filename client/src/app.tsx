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
  } from "react-router-dom";
import DashboardPresenter from './Components/Dashboard/DashboardPresenter';
import MenuView from "./Components/Menu/MenuView";

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
<<<<<<< HEAD
                <Route path="/login" element={<LoginPresenter />} />
            </Routes>
            <div>
            <MenuView/>
            <Routes>
                
                <Route path="/dashboard" element={<DashboardPresenter />} />
                <Route path="/template" element={<TemplatePresenter />} />
=======
                <Route path="/dashboard" element={<DashboardPresenter />} />
                <Route path="/template" element={<TemplatePresenter />} />
                <Route path="/login" element={<LoginPresenter />} />
                <Route path="/signup" element={<SignupPresenter />} />
>>>>>>> d682e31df139023a5b710695128ad6b308a5c772
                <Route path="/profile" element={<ProfilePresenter />} />
                
            </Routes>
            </div>
            
        </HashRouter>
        
        
       {/*<Router>
            <Route path="/dashboard" element={<Dashboard />} />
            <div>
                <TemplatePresenter></TemplatePresenter>
                <p>Experience Saversss</p><div>{`${fetchedData}`}</div>
            </div> 
    </Router>
    
     <div>
                    <p>Experience Saversss</p><div>{`${fetchedData}`}</div>
                </div> 

*/}
        
    </Theme>
    )
}

const GlobalStyle = createGlobalStyle `
    body {
    margin: 0;
    padding: 0;
    }

    a:hover {
        color: #EC7267;
        transition: color 200ms;
      }
    
      
`;



ReactDOM.createRoot(document.getElementById('app')!).render(<App />);

