import { BEZ_CONFIG, FIREBASE_ENABLED } from './config.js';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js';
import {
  getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signOut, updateProfile, sendEmailVerification, sendPasswordResetEmail, reload, deleteUser
} from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js';
import { getStorage, ref as storageRef, getDownloadURL } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-storage.js';

let app=null, auth=null, storage=null;
if(FIREBASE_ENABLED){
  app=initializeApp(BEZ_CONFIG.firebase);
  auth=getAuth(app);
  storage=getStorage(app);
}
function waitForAuth(){
  if(!FIREBASE_ENABLED) return Promise.resolve(null);
  return new Promise(resolve=>{const off=onAuthStateChanged(auth,u=>{off();resolve(u)});});
}
export {
  FIREBASE_ENABLED, auth, storage, waitForAuth, createUserWithEmailAndPassword,
  signInWithEmailAndPassword, signOut, updateProfile, sendEmailVerification,
  sendPasswordResetEmail, reload, deleteUser, storageRef, getDownloadURL
};
