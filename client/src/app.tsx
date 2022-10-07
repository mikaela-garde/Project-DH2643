import React from 'react';
import ReactDOM from 'react-dom/client';
import { getAPI } from './webAPI/webAPI';
import TemplatePresenter from './Components/Template/TemplatePresenter';
import Theme from "./Theme";
import {
    HashRouter,
    Routes,
    Route,
    BrowserRouter
  } from "react-router-dom";
import DashboardPresenter from './Components/Dashboard/DashboardPresenter';


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
        <HashRouter>
            <Routes>

                <Route path="/dashboard" element={<DashboardPresenter />} />
                <Route path="/template" element={<TemplatePresenter />} />
                
            </Routes>
        </HashRouter>

        <div>
            <p>Experience Saversss</p><div>{`${fetchedData}`}</div>
        </div> 
        
    </Theme>
    )
}

ReactDOM.createRoot(document.getElementById('app')!).render(<App />);

