import {initializeApp} from 'firebase/app';

import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';


// setting firebase config 
const firebaseConfig = {
    apiKey: "AIzaSyCx3ZE9Pb4YHdQRLYIwJQ55oyyeY2RYFJg",
    authDomain: "npl-clothing.firebaseapp.com",
    projectId: "npl-clothing",
    storageBucket: "npl-clothing.appspot.com",
    messagingSenderId: "638055211450",
    appId: "1:638055211450:web:9ee2939ea3da5c81327d83",
    measurementId: "G-3EN2YF18VT"
  };

const firebaseApp = initializeApp(firebaseConfig); // setting app the firebase cursor for the CRUD operations

const provider = new GoogleAuthProvider(); // creating sign in option provider here is sign in with google

provider.setCustomParameters({
    prompt: "select_account"
});


export const auth = getAuth(); // creating the authentication instance of a user in a site for a whole session
export const signInWithPopup = () => signInWithPopup(auth, provider); // for the popup signIn providing the auth instance and google auth provider


