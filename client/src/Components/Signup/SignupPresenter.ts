import React, {useState} from 'react';
import SignupView from "./SignupView";
import {UserModel} from "../../app";

function SignUpPresenter (props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return React.createElement(SignupView, {
        setFirstName: (input) => setFirstName(input),
        setLastName: (input) => setLastName(input),
        setEmail: (input) => setEmail(input),
        setPassword: (input) => setPassword(input),
        onSignUp: () => UserModel.createNewUserFB(firstName, lastName, email, password)
    });
}


export default SignUpPresenter;