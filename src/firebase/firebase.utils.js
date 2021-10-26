import { initializeApp } from 'firebase/app';

import { getAuth, GoogleAuthProvider, signInWithPopup  } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
import { doc, getDoc, setDoc } from 'firebase/firestore'

const config = {
    apiKey: "AIzaSyDmPakycTSb1K5piHl0MA6WyPxrev6B-Rw",
    authDomain: "crwn-store-4ba82.firebaseapp.com",
    projectId: "crwn-store-4ba82",
    storageBucket: "crwn-store-4ba82.appspot.com",
    messagingSenderId: "474183466400",
    appId: "1:474183466400:web:3a899bd3afc18d9316f8c5",
    measurementId: "G-82L282QY81"
};


const firebaseApp = initializeApp(config);
const db = getFirestore(firebaseApp);
export const auth = getAuth();

export const createUserProfileDocument = async (userAuth, additionalData) => {

  if(!userAuth) return
  const userRef = doc(db,`users/${userAuth.uid}`);
  const snapShot = await getDoc(userRef);
  if(!snapShot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date()
    try{
     await setDoc(userRef,{
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(e){
      console.log(e.message);
    }
  }
  
  return userRef;
}

const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => signInWithPopup(auth, provider)
.then((result) => {
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential.accessToken;
  const user = result.user;
}).catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  const email = error.email;
  const credential = GoogleAuthProvider.credentialFromError(error);
});

