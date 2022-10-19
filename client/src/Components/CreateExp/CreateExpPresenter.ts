import React, {useState} from 'react';
import CreateExpView from './CreateExpView';
import {experienceModel} from "../../app";
import useModelProp from '../../useModelProp';


function CreateExpPresenter (props) {
    const participants = useModelProp(experienceModel, "participants");
    const [startDate, setStartDate] = useState(new Date());
    const [name, setName] = useState("");
    const [invite, setInvite] = useState("");

    //https://stackoverflow.com/questions/26700924/query-based-on-multiple-where-clauses-in-firebase/26701282#26701282 För att få ut invite
    
    return React.createElement(CreateExpView, {
        //onToggle: () =>  setStartDate({date}),
        startDate: startDate,
        onToggle: (date:Date) => setStartDate(date),
        setName: (input) => setName(input),
        setInvite: (input) => setInvite(input),
        onInvite: () => experienceModel.addParticipant(invite),
        participants: participants
    })
}


export default CreateExpPresenter;