import axios from 'axios';

export const getUserFromEmailAPI = (email, token) => axios.post("https://localhost:8081/api/users/email", { 
    email: email,
    token: token
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

export const listenToUserAPI = (token) => axios.post("https://localhost:8081/api/listeners/user", {
    token: token
});

export const getUidFromTokenAPI = (token) => axios.post("https://localhost:8081/api/users/getuid", {
    token: token
});

export const uploadAPI = (formData) => axios.post("https://localhost:8081/api/upload", formData);

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

export const listenToExperienceAPI = (id, token) => axios.post("https://localhost:8081/api/listeners/experience", {
    id: id,
    token: token
});
