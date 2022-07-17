import { useState, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import {
  signInWithGooglePopup,
  // createAuthUserWithEmailAndPassword,
  // createUserDocumentfromAuth,
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  createUserDocumentfromAuth
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.style.scss";

// setting default form feilds to pass the data to and from models for db
const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {

  // setting formfeilds and initalizing them
  const [formFields, setFormFields] = useState(defaultFormFields);
  
  // changeing form felids to extract and pass the data
  const { email, password } = formFields;
  
  const  { setCurrentUser } = useContext(UserContext);
  console.log(formFields);

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup(email, password);
    const newUser = await createUserDocumentfromAuth(user)
    if (newUser) {
      console.log(newUser);
      alert("User Successfully Registered");
  }
  resetFormFields();
  };



  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const submitHandler = async (event) => {
    console.log("working!! i guess")
    // restricts all the default funcationality of the form so the we can handle submit form as we desire
    event.preventDefault();

    try {
        const { user } = await signInAuthUserWithEmailAndPassword(email, password);
        setCurrentUser(user);
        alert("Login Successfull!!")
        console.log("user here is ",user)
        resetFormFields();
     } catch (err) {

      switch(err.code) {
        case  'auth/wrong-password':
          alert("Email or Password is Invalid!!");
          break;
        case 'auth/user-not-found':
          alert("No user with such Email address!!");
          break;
        default:
          console.log(err);


      }
      
      
 
     }
  };

  // function
  // to keep track of any changes in the form feilds
  const changeHandler = (event) => {
    // object d-structuring for the event's name and value
    // name gives the specified name in the input field name="eventName"
    const { name, value } = event.target;

    // only updating one field at a time so spreading the form fields
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with Email/Password</span>
      {/* // set the changing variables into value so that they update the inpute fields as types go onChange */}
      {/* // once the form is being submitted trigger the below onSubmit function */}
      <form onSubmit={submitHandler}>
        <FormInput
          label="Email"
          //    passing input options as an object by extracting/d-structuring in it
          inputOptions={{
            type: "email",
            onChange: changeHandler,
            name: "email",
            value: email,
            required: true,
          }}
        />

        <FormInput
          label="password"
          inputOptions={{
            type: "password",
            onChange: changeHandler,
            name: "password",
            value: password,
            required: true,
          }}
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type='button' buttonType="google" onClick={signInWithGoogle}>
          Google Sign In 
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
