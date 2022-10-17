import { initializeApp } from 'firebase/app';
import { Database, getDatabase, onValue, ref} from "firebase/database";
import firebaseConfig from './firebase-config';

const firebaseApp = initializeApp(firebaseConfig);
const db:Database = getDatabase(firebaseApp);


const listenToUser = (uid:string, callback:any) => {
    onValue(ref(db, 'users/' + uid), (snapshot) => {
      callback(snapshot.val());
  });
}


export {db, listenToUser};