import { Fragment } from "react"

import { signInWithPopup } from '../../utils/firebase/firebase.utils'

const SignIn = () => {

    const logGoogleUser = async () => {
        const response = await signInWithPopup();
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