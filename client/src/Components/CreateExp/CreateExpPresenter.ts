import React, {useState} from 'react';
import CreateExpView from './CreateExpView';
import {experienceModel} from "../../app";
import useModelProp from '../../useModelProp';
import { useNavigate } from "react-router-dom";
import {UserModel} from "../../app";


function CreateExpPresenter (props) {
    const [name, setName] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [participants, setParticipants] = useState<any[]>([]);
    const [invite, setInvite] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const navigate = useNavigate();

    const handleInvErr = (invite) => {
        if (invite == UserModel.email) {
            setErrorMsg("Error, you can't invite yourself!")
        } else if (participants.length > 0) {
            for (let i = 0; i < participants.length; i++) {
                if (participants[i].email == invite) {
                    setErrorMsg("Error, user already invited!")
                } else {
                    experienceModel.fetchInvitedParticipant(invite).then((user) => setParticipants([...participants, user]));
                    setInvite(""); 
                    setErrorMsg("")
                }
            }
        } else {
            experienceModel.fetchInvitedParticipant(invite).then((user) => setParticipants([...participants, user]));
            setInvite(""); 
            setErrorMsg("")
        }
    }
    
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
            handleInvErr(invite)
        },
        participants: participants,
        onCreate: () => experienceModel.createExperience(name, startDate, endDate, participants).then(() => {
            navigate('/exp-board');
        }),
        errorMsg: errorMsg

    })
}


export default CreateExpPresenter;