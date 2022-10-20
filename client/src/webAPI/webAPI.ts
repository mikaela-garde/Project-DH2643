import axios from 'axios';
import {User} from "../types";

export const getUserAPI = (uid) => axios.get("https://localhost:8081/api/users/"+uid, { 
    withCredentials: true,
});


export const createAccountAPI = (firstName, lastName, email, password, profileImage) => axios.post("https://localhost:8081/api/users/signup", {
    
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    profileImage: profileImage
});

export const loginAPI = (email, password) => axios.post("https://localhost:8081/api/users/login", {
    email: email,
    password: password
});

export const listenToUserAPI = (uid) => axios.post("https://localhost:8081/api/listeners/user", {
    uid: uid
});

export const getUidFromTokenAPI = (token) => axios.post("https://localhost:8081/api/users/getuid", {
    token: token
});


export const uploadAPI = (formData) => axios.post("https://localhost:8081/api/upload", formData);
