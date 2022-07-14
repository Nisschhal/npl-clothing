import { Fragment } from "react"

import { signInWithGooglePopup, createUserDocumentfromAuth } from '../../utils/firebase/firebase.utils'

const SignIn = () => {

    const logGooglePopUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userRefDoc = await createUserDocumentfromAuth(user);
        console.log(userRefDoc);
    }
    return (
        <Fragment>
            Sign in page
            <button onClick={logGooglePopUser}>Sign In with Google</button>
        </Fragment>

    )
}

export default SignIn;