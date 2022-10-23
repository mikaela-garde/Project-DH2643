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
  console.log("id i listen", id);
  const unsubscribe = onValue(ref_db(db, 'experiences/' + id), (snapshot:any) => {
    snapshot.val()[id]= id; 
    callback(snapshot.val());
  });

  return unsubscribe;
}

const storeFile =  (file:any, fileName: string, userId: string, expId: string, date: string) => {
  //Store data in Cloud Storage
  const ref = ref_storage(storage, 'experiences/' + fileName);
  console.log("kom in i store")
  const refFirebase = ref_db(db, 'experiences/' + expId + '/posts/');
  
  uploadBytesResumable(ref, file).then(snapshot => 
    getDownloadURL(ref)
    .then((downloadURL:string) => {console.log("kom in i urldwonload"), push(refFirebase, {
      userId : userId,
      date : date,
      imgURL : downloadURL
    })}
    ))

  /*uploadTask.on('state_changed', () => {
    getDownloadURL(ref).then((downloadURL:string) => {
      console.log("file location", downloadURL)s; 
    }
    console.log('Uploaded a blob or file!');
    return res.status(200).send("File uploaded to Cloud Storage");
  })*/
}

const fetchFile = async (fileName: string, res:any) => {
  //Store data in Cloud Storage
  const ref = ref_storage(storage, 'experiences/' + fileName);
  let fileURL = await getDownloadURL(ref)
  return res.status(200).send(fileURL);
  /*
  .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'
    
    const img = document.getElementById('c453d824-e681-4a9a-91a5-0f03544dade7.jpeg');
    if (img !== null) {
      img.setAttribute('src', url);
      return img
    } else {
      console.log("Bilden hittades ej :(")
    }
  })
  .catch((error) => {
    // Handle any errors
  });*/

}


export {db, storeFile, fetchFile, storage, listenToUser, listenToExperience};
