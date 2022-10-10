import { initializeApp } from 'firebase/app';
import { Database, getDatabase} from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBfZR7iec4_6_AbFzQliaLBq326x3FS91I",
    authDomain: "project-dh2643.firebaseapp.com",
    databaseURL: "https://project-dh2643-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "project-dh2643",
    storageBucket: "project-dh2643.appspot.com",
    messagingSenderId: "219714761097",
    appId: "1:219714761097:web:b55a00e5a77fe9f8bbf158",
    measurementId: "G-VV67YYCZYT"
};

const firebaseApp = initializeApp(firebaseConfig);
const db:Database = getDatabase(firebaseApp);

export default db;