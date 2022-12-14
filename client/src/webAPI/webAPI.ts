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


export const toggleDarkModeAPI = (token, dark_mode) => axios.post("https://localhost:8081/api/users/toggle-dark", {
    token: token,
    dark_mode: dark_mode
});

export const updateExperiencesUserAPI = (token, exp_id) => axios.post("https://localhost:8081/api/users/experience", {
    token: token,
    exp_id: exp_id
});

//EXPERIENCE
export const createExperienceAPI = (token, name, start_time, end_time, participants) => axios.post("https://localhost:8081/api/experiences/create", {
    token: token,
    name: name,
    start_time: start_time,
    end_time: end_time,
    participants: participants
});

export const listenToExperienceAPI = (token, exp_id) => axios.post("https://localhost:8081/api/listeners/experience", {
    token: token,
    exp_id: exp_id
});

export const getExpAPI = (token, id, withoutPosts) => axios.post("https://localhost:8081/api/experiences/fetch", {
    id: id,
    withoutPosts: withoutPosts,
    token: token
});