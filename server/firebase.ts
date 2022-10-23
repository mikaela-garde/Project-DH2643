// @ts-no-check
import { initializeApp } from 'firebase/app';
import { Database, getDatabase, onValue, set, ref as ref_db, push} from "firebase/database";
import firebaseConfig from './firebase-config';
import { getStorage, ref as ref_storage, uploadBytesResumable, getDownloadURL} from "firebase/storage";


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
    callback(snapshot.val());
  });

  return unsubscribe;
}

const storeFile =  (userId: string, expId: string, date: string, caption: string, uploaderName:string, file:any, fileName: string, res:any) => {
  //Store data in Cloud Storage
  const ref = ref_storage(storage, 'experiences/' + fileName);
  const refFirebase = ref_db(db, 'experiences/' + expId + '/posts/');

  uploadBytesResumable(ref, file).then(snapshot => 
    getDownloadURL(ref)
    .then((downloadURL:string) => {push(refFirebase, {
      userId : userId,
      date : date,
      caption: caption,
      imgURL : downloadURL,
      uploaderName: uploaderName,
    }).then(() => res.status(200).send("success"))}
    )).catch((error) => res.status(200).send(error));
}

const fetchFile = async (fileName: string, res:any) => {
  //Store data in Cloud Storage
  const ref = ref_storage(storage, 'experiences/' + fileName);
  let fileURL = await getDownloadURL(ref)
  return res.status(200).send(fileURL);

}


export {db, storeFile, fetchFile, storage, listenToUser, listenToExperience};
