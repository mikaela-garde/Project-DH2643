import React from 'react';
import ReactDOM from 'react-dom/client';
import { getAPI } from './webAPI/webAPI';
import TemplatePresenter from './Components//Template/TemplatePresenter';
import Theme from "./Theme";
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

ReactDOM.createRoot(document.getElementById('app')!).render(<App />);

