import { initializeApp } from 'firebase/app';
import { Database, getDatabase} from "firebase/database";
import { firebaseConfig } from './firebase-config';

const firebaseApp = initializeApp(firebaseConfig);
const db:Database = getDatabase(firebaseApp);

export default db;