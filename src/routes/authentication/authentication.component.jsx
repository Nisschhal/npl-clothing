import SignUpForm from "../../components/sign-up/sign-up-form.component";

import SignInForm from "../../components/sign-in/sign-in-form.component";


import './authentication.style.scss';

const Authentication = () => {


    return (
        <div className="authentication-container">
            <SignInForm/>
            {/* // pass to google popup */}
            <SignUpForm/>
        </div>

    )
}

export default Authentication;