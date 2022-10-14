import axios from 'axios';

export const getAPI = () => axios.get("https://localhost:8081/api/users/2", { 
    withCredentials: true,
}).then(( { data }: { data: { someData: string } }) => data);


export const postAPI = (user) => axios.post('https://localhost:8081/api/users/', user);