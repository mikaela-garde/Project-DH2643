import React, {useState} from 'react';
import CreateExpView from './CreateExpView';
import {experienceModel} from "../../app";
import useModelProp from '../../useModelProp';


function CreateExpPresenter (props) {
    const participants = useModelProp(experienceModel, "participants");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [name, setName] = useState("");
    const [invite, setInvite] = useState("");
    
    return React.createElement(CreateExpView, {
        startDate: startDate,
        setStartDate: (date:Date) => {setStartDate(date)
            setEndDate(date)},
        endDate: endDate,
        setEndDate: (date:Date) => {setEndDate(date)
            console.log("enddate", date)},
        setName: (input) => setName(input),
        invite: invite,
        setInvite: (input) => setInvite(input),
        onInvite: () => {
            experienceModel.addParticipant(invite);
            setInvite("");
        },
        participants: participants
    })
}


export default CreateExpPresenter;