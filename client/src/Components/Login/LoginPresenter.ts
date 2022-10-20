import React, {useState, useEffect} from 'react';
import LoginView from "./LoginView";
import {UserModel} from "../../app";
import useModelProp from "../../useModelProp";
import { useNavigate } from "react-router-dom";

function LoginPresenter (props) {
    const navigate = useNavigate();
    const loginErrorMessage = useModelProp(UserModel, "signInErrorMsg");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const loggedIn = useModelProp(UserModel, "isLoggedIn");
    
    return  React.createElement(LoginView, {
        loginErrorMessage: loginErrorMessage,
        setEmail: (input) => setEmail(input),
        setPassword: (input) => setPassword(input),
        onSignIn: () => {
            UserModel.SignInFB(email, password);
        } 
    });
}


export default LoginPresenter;