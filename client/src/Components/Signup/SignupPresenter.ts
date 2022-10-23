import React, {useState, useEffect} from 'react';
import SignupView from "./SignupView";
import {UserModel} from "../../app";
import useModelProp from "../../useModelProp";
import EmptyProfileImage from "../../Images/EmptyProfileImg.svg"



function SignUpPresenter (props) {
    const loginErrorMessage = useModelProp(UserModel, "signErrorMsg");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [image, setImage] = useState((data) => data? data : EmptyProfileImage);

    useEffect(() => {
        return UserModel.setSignErrorMsg(""); // cleans up error message if user comes back
    }, []);

    return React.createElement(SignupView, {
        loginErrorMessage: loginErrorMessage,
        setFirstName: (input) => setFirstName(input),
        setLastName: (input) => setLastName(input),
        setEmail: (input) => setEmail(input),
        setPassword: (input) => setPassword(input),
        setImage: (input) => setImage(input),
        onSignUp: () => {
            if (UserModel.regExSignUp(firstName, lastName)) {
                UserModel.createNewUserFB(firstName, lastName, email, password == "" ? " ": password, image)
            }
        }
    })
}


export default SignUpPresenter;