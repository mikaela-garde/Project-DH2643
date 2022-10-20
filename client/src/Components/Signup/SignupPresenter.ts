import React, {useState, useEffect} from 'react';
import SignupView from "./SignupView";
import {UserModel} from "../../app";
import useModelProp from "../../useModelProp";
import EmptyProfileImage from "../../Images/EmptyProfileImg.svg"
import CatImg from "../../Images/sad_cat.jpeg";
import { useNavigate } from "react-router-dom";
import SVG from "react-inlinesvg";

function SignUpPresenter (props) {
    const navigate = useNavigate();
    const loginErrorMessage = useModelProp(UserModel, "signUpErrorMsg");
    const loggedIn = useModelProp(UserModel, "isLoggedIn");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [image, setImage] = useState((data) => data? data : EmptyProfileImage);

    return React.createElement(SignupView, {
        loginErrorMessage: loginErrorMessage,
        setFirstName: (input) => setFirstName(input),
        setLastName: (input) => setLastName(input),
        setEmail: (input) => setEmail(input),
        setPassword: (input) => setPassword(input),
        setImage: (input) => setImage(input),
        onSignUp: () => {
            UserModel.createNewUserFB(firstName, lastName, email, password, image)
        }
    })
}


export default SignUpPresenter;