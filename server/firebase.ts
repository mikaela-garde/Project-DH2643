// @ts-no-check
import { initializeApp } from 'firebase/app';
import { Database, getDatabase, onValue, set, ref as ref_db} from "firebase/database";
import firebaseConfig from './firebase-config';
import { getStorage, ref as ref_storage, uploadBytes, uploadString} from "firebase/storage";
import {Image} from "./src/models/types";
import { Buffer } from 'node:buffer';
import express from "express";
import Multer, { diskStorage } from 'multer';

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
  /*
  console.log(typeof infile);
  //const newFile = new Blob([JSON.stringify(file)], {type:'application/json'});
  const FormData = require('form-data');
  const formData = new FormData();
  const ff = new File([infile]); //add filename here
  formData.append('file01', ff);*/

  
  uploadBytes(ref, file).then((snapshot) => {
    console.log('Uploaded a blob or file!');
  })
}


export {db, store, storage, listenToUser};