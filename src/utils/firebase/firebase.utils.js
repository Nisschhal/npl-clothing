import {initializeApp} from 'firebase/app';

import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

// setting firebase config 
const firebaseConfig = {
    apiKey: "AIzaSyB9TQ2Pc1j-dZr5NYKzilgJtmjN8OpHEw4",
    authDomain: "npl-clothing-db.firebaseapp.com",
    projectId: "npl-clothing-db",
    storageBucket: "npl-clothing-db.appspot.com",
    messagingSenderId: "9832071515",
    appId: "1:9832071515:web:8636e75a75dfddcfba5a7e",
    measurementId: "G-9Q9H1VQHLW"
  };
const firebaseApp = initializeApp(firebaseConfig); // setting app the firebase cursor for the CRUD operations

const provider = new GoogleAuthProvider(); // creating sign in option provider here is sign in with google

provider.setCustomParameters({
    prompt: "select_account"
});


export const auth = getAuth(); // creating the authentication instance of a user in a site for a whole session
export const signInWithGooglePopup = () => signInWithPopup(auth, provider); // for the popup signIn providing the auth instance and google auth provider

export const db = getFirestore(); // accesing and specifiing the new instance of Firestore database
