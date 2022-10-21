// @ts-no-check
import { initializeApp } from 'firebase/app';
import { Database, getDatabase, onValue, set, ref as ref_db} from "firebase/database";
import firebaseConfig from './firebase-config';
import { getStorage, ref as ref_storage, uploadBytes, uploadBytesResumable, uploadString} from "firebase/storage";


const firebaseApp = initializeApp(firebaseConfig);
const db:Database = getDatabase(firebaseApp);
const storage = getStorage(firebaseApp);

const listenToUser = (uid:string, callback:any) => {
    const unsubscribe = onValue(ref_db(db, 'users/' + uid), (snapshot) => {
      callback(snapshot.val());
  });
  return unsubscribe;
}

const listenToExperience = (id:string, callback:any) => {
  const unsubscribe = onValue(ref_db(db, 'experiences/' + id), (snapshot:any) => {
    snapshot.val()[id]= id; 
    callback(snapshot.val());
  });

  return unsubscribe;
}

const store = (buffer:any) => {
//Store data in Cloud Storage
  const ref = ref_storage(storage, 'profileImages');
  uploadBytesResumable(ref, buffer).then((snapshot) => {
    console.log('Uploaded a blob or file!');
  })
}


export {db, store, storage, listenToUser, listenToExperience};
