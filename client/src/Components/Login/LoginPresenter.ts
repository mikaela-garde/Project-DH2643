import React, {useState, useEffect} from 'react';
import LoginView from "./LoginView";
import {UserModel} from "../../app";
import useModelProp from "../../useModelProp";

function LoginPresenter (props) {
    const loginErrorMessage = useModelProp(UserModel, "signErrorMsg");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    useEffect(() => {
        return UserModel.setSignErrorMsg(""); // cleans up error message
    }, []);

    return  React.createElement(LoginView, {
        loginErrorMessage: loginErrorMessage,
        setEmail: (input) => setEmail(input),
        setPassword: (input) => setPassword(input),
        onSignIn: () => {
            UserModel.SignInFB(email, password == "" ? " ": password); // firebase returns internal error if empty
        } 
    });
}


export default LoginPresenter;