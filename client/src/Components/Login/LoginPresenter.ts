import React, {useState} from 'react';
import LoginView from "./LoginView";
import {UserModel} from "../../app";

function LoginPresenter (props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    return React.createElement(LoginView, {
        setEmail: (input) => setEmail(input),
        setPassword: (input) => setPassword(input),
        onSignIn: () => UserModel.SignInFB(email, password)
    });
}


export default LoginPresenter;