import axios from 'axios';

export const getUserAPI = (uid) => axios.get("https://localhost:8081/api/users/"+uid, { 
    withCredentials: true,
});


export const postAPI = (user) => axios.post('https://localhost:8081/api/users/', user);