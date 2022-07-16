import { Fragment } from "react"
import SignUpForm from "../../components/sign-up/sign-up-form.component";

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
            {/* // pass to google popup */}
            <button onClick={logGooglePopUser}>Sign In with Google</button>
            <SignUpForm/>
        </Fragment>

    )
}

export default SignIn;