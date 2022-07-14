import { Fragment } from "react"

import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils'

const SignIn = () => {

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
    }
    return (
        <Fragment>
            Sign in page
            <button onClick={logGoogleUser}>Sign In with Google</button>
        </Fragment>

    )
}

export default SignIn;