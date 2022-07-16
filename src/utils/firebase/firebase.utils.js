import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword
} from "firebase/auth";

// getting required function for the firebaseController and doc for setting and getting doc to and from firestore db
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// setting firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB9TQ2Pc1j-dZr5NYKzilgJtmjN8OpHEw4",
  authDomain: "npl-clothing-db.firebaseapp.com",
  projectId: "npl-clothing-db",
  storageBucket: "npl-clothing-db.appspot.com",
  messagingSenderId: "9832071515",
  appId: "1:9832071515:web:8636e75a75dfddcfba5a7e",
  measurementId: "G-9Q9H1VQHLW",
};
const firebaseApp = initializeApp(firebaseConfig); // setting app the firebase cursor for the CRUD operations

const googleProvider = new GoogleAuthProvider(); // creating sign in option provider here is sign in with google

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth(); // creating the authentication instance of a user in a site for a whole session
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider); // for the popup signIn providing the auth instance and google auth provider

export const db = getFirestore(); // accesing and specifiing the new instance of Firestore database

// creating document into the firebase using the auth
export const createUserDocumentfromAuth = async (userAuth, additionalInfo = {}) => {
    if (!userAuth) return;
  // get the user doc with the referenced userAuthID if there is no such doc with given id then it creates a new one
  // points to that created models in the db however it hasn't been set yet.
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  // extract the referenced doc as an snapshop object from db for db to check if it exist or not
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());
  // if theere is no data create one
  if (!userSnapshot.exists()) {
    const { displayName, email, phoneNumber } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { 
        displayName, 
        email, 
        phoneNumber, 
        createdAt,
        // addition displyName and pw to the user model for the db
        ...additionalInfo 
    });
    } catch (err) {
      console.log("error while creating user model into firebase", err.message);
    }
  }
  console.log(getDoc(userDocRef));
  return userDocRef;
};

// exporting function for the email/password signup
export const createAuthUserWithEmailAndPassword =  async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};