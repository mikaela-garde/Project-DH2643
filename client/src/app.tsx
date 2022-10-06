import React from 'react';
import ReactDOM from 'react-dom/client';
import { getAPI } from './webAPI/webAPI';
import TemplatePresenter from './Components//Template/TemplatePresenter';
import Theme from "./Theme";


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
        <div>
            <TemplatePresenter></TemplatePresenter>
            <p>Experience Saversss</p><div>{`${fetchedData}`}</div>
        </div>
    </Theme>
    )
}

ReactDOM.createRoot(document.getElementById('app')!).render(<App />);

