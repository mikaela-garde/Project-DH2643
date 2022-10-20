// @ts-no-check
import { initializeApp } from 'firebase/app';
import { Database, getDatabase, onValue, ref as ref_db} from "firebase/database";
import firebaseConfig from './firebase-config';
import { getStorage, ref as ref_storage, uploadBytes} from "firebase/storage";
import {Image} from "./src/models/types";

const firebaseApp = initializeApp(firebaseConfig);
const db:Database = getDatabase(firebaseApp);
const storage = getStorage(firebaseApp);

const listenToUser = (uid:string, callback:any) => {
    const unsubscribe = onValue(ref_db(db, 'users/' + uid), (snapshot) => {
      callback(snapshot.val());
  });
  
  return unsubscribe;
}


const store = (file: any) => {
  const ref = ref_storage(storage, 'profileImages');
  console.log(file)
  uploadBytes(ref, file).then((snapshot) => {
    console.log('Uploaded a blob or file!');
  });
}


export {db, store, storage, listenToUser};