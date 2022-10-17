import React, {useState} from 'react';
import SignupView from "./SignupView";
import {UserModel} from "../../app";
import useModelProp from "../../useModelProp";
import EmptyProfileImage from "../../Images/emptyProfileImg.png"
import CatImg from "../../Images/sad_cat.jpeg";

function SignUpPresenter (props) {

    const loginErrorMessage = useModelProp(UserModel, "signUpErrorMsg");
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
        onSignUp: () => UserModel.createNewUserFB(firstName, lastName, email, password, image)
    });
}


export default SignUpPresenter;