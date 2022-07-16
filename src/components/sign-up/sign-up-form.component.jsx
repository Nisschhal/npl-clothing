import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentfromAuth } from "../../utils/firebase/firebase.utils";

// setting default form feilds to pass the data to and from models for db
const defaultFormFields ={
    displayName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
}
const SignUpForm = () => {
    
    // setting formfeilds and initalizing them
    const [formFields , setFormFields ] = useState(defaultFormFields);

    // changeing form felids to extract and pass the data
    const { displayName, email, phoneNumber, password, confirmPassword } = formFields;
    
    console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    } 

    const submitHandler = async(event) => {
        // restricts all the default funcationality of the form so the we can handle submit form as we desire 
        event.preventDefault()
        
        if (password !== confirmPassword) {
            alert("Password doesn't matched!!");
            return;
        }

        try {
            // registering into firebase authentication
            // and accessing user form response UserImp
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            // creating userDoc into db form authenticaiton giving extracted user from above and ADDING additional infromation to spread into the user doc 
            // here displayname and phoneNumber from the input fields to add inthe db
            const newUser = await createUserDocumentfromAuth(user, {displayName, phoneNumber})
            if (newUser) {
                console.log(newUser);
                alert("User Successfully Registered");
            }
            resetFormFields();


        } catch(err) {
            if (err.code === "auth/email-already-in-use"){
                alert("Couldn't register User, Email Address already exits!!")
            }
            console.log("Error while signing up with email and password", err.message)

        }
    }

    // function 
    // to keep track of any changes in the form feilds
    const changeHandler = (event) => {
        // object d-structuring for the event's name and value
        // name gives the specified name in the input field name="eventName"
        const { name, value } = event.target;

        // only updating one field at a time so spreading the form fields
        setFormFields({...formFields, [name]: value});
    }

    return (
        <div>
            <h1>Sign up with Email/Password</h1>
            {/* // set the changing variables into value so that they update the inpute fields as types go onChange */}
            {/* // once the form is being submitted trigger the below onSubmit function */}
            <form onSubmit={submitHandler}>
                <label >Full Name</label>
                <input type="text" onChange={changeHandler} name="displayName" value={displayName} required/>
                <label >Email</label>
                <input type="email" onChange={changeHandler} name="email" value={email} required/>
                <label >Phone Number</label>
                <input type="text" onChange={changeHandler} name="phoneNumber" value={phoneNumber} required/>
                <label >Password</label>
                <input type="password" onChange={changeHandler} name="password" value={password} required/>
                <label >Confirm Passwor</label>
                <input type="password" onChange={changeHandler} name="confirmPassword" value={confirmPassword} required/>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default SignUpForm;