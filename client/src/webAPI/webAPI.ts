import axios from 'axios';
import {User} from "../types";

export const getUserAPI = (uid) => axios.get("https://localhost:8081/api/users/"+uid, { 
    withCredentials: true,
});

export const getUserFromEmailAPI = (email) => axios.post("https://localhost:8081/api/users/email", { 
    email: email
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

export const toggleDarkMode = (token, dark_mode) => axios.post("https://localhost:8081/api/users/toggle-dark", {
    token: token,
    dark_mode: dark_mode
});


//EXPERIENCE
export const createExperienceAPI = (token, name, start_time, end_time, participants) => axios.post("https://localhost:8081/api/experiences", {
    token: token,
    name: name,
    start_time: start_time,
    end_time: end_time,
    participants: participants
});

export const listenToExperienceAPI = (id) => axios.post("https://localhost:8081/api/listeners/experience", {
    id: id
});
