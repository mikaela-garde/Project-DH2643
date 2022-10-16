import React, {useState} from 'react';
import GridView from "./GridView";

function GridPresenter (props) {
    const [Experience, setExperience] = useState("");
    const ExpList = [{title: "hej", date: "datum", img: "bild"}];
    

    return React.createElement(GridView,{
        setExperience: () => setExperience(Experience),
        ExpList: ExpList,
        }
        )
}


export default GridPresenter;