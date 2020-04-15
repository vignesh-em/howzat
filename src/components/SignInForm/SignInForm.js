import React, {useEffect, useState} from "react";
import "./signinform.css";

const SignInForm = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [isSignInClicked, setIsSignInClicked] = useState(false);

    useEffect(() => {
        if (isSignInClicked) {
            setIsSignInClicked(false);
            console.log(`${userName} ${password}`);
        }
    }, [isSignInClicked]);

    return (
        <form>
            <div className="sign-in-container">
                <div className="sign-in-input-field-container">
                    <label htmlFor="userName" className="sign-in-label">User Name</label>
                    <input
                        name="userName"
                        type="text"
                        onChange={({target}) => setUserName(target.value)}
                        className="sign-in-input-text-field"/>
                </div>
                <div className="sign-in-input-field-container">
                    <label htmlFor="password" className="sign-in-label">Password</label>
                    <input
                        name="password"
                        type="password"
                        onChange={({target}) => setPassword(target.value)}
                        className="sign-in-input-text-field"/>
                </div>
                <span className="sign-in-button" onClick={() => setIsSignInClicked(true)}>Sign In</span>
            </div>
        </form>
    );
}

export default SignInForm;