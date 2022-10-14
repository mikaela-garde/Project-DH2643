import axios from 'axios';

export const getAPI = () => axios.get("https://localhost:8081/api/users/2", { 
    withCredentials: true,
}).then(( { data }: { data: { someData: string } }) => data);


export const postAPI = () => axios.post('https://localhost:8081/api/users/2', {
  user_id: 14,
  email: "mik@gmail.com",
  password: "hejsan"
});