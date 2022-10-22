import React, {useState} from 'react';
import CreateExpView from './CreateExpView';
import {experienceModel} from "../../app";
import useModelProp from '../../useModelProp';
import { useNavigate } from "react-router-dom";


function CreateExpPresenter (props) {
    const [name, setName] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [participants, setParticipants] = useState<any[]>([]);
    const [invite, setInvite] = useState("");
    const navigate = useNavigate();
    
    return React.createElement(CreateExpView, {
        startDate: startDate,
        setStartDate: (date:Date) => {setStartDate(date)
            setEndDate(date)
        },
        endDate: endDate,
        setEndDate: (date:Date) => {setEndDate(date)
            console.log("enddate", date)
        },
        setName: (input) => setName(input),
        invite: invite,
        setInvite: (input) => setInvite(input),
        onInvite: () => {
            experienceModel.fetchInvitedParticipant(invite).then((user) => setParticipants([...participants, user]));
            setInvite("");
        },
        participants: participants,
        onCreate: () => experienceModel.createExperience(name, startDate, endDate, participants).then(() => {
            navigate('/exp-board');
        })
    })
}


export default CreateExpPresenter;