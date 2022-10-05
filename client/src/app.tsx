import React from 'react';
import ReactDOM from 'react-dom/client';
import { getAPI } from './webAPI/webAPI';


const App = () => {
    const [fetchedData, setFetchedData] = React.useState("");
    React.useEffect(() => {

        getAPI().then(data => {
            setFetchedData(data.someData);
        }).catch(e => {
            console.log(e)
        });
    }, [])

    return <div><p>Experience Saversss</p><div>{`${fetchedData}`}</div></div>
}

ReactDOM.createRoot(document.getElementById('app')!).render(<App />);

