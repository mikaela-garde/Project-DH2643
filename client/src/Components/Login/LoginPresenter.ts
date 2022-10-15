import React, {useState} from 'react';
import LoginView from "./LoginView";
import {UserModel} from "../../app";
import useModelProp from "../../useModelProp";

function LoginPresenter (props) {
    const loginErrorMessage = useModelProp(UserModel, "signInErrorMsg");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    return React.createElement(LoginView, {
        loginErrorMessage: loginErrorMessage,
        setEmail: (input) => setEmail(input),
        setPassword: (input) => setPassword(input),
        onSignIn: () => UserModel.SignInFB(email, password)
    });
}


export default LoginPresenter;