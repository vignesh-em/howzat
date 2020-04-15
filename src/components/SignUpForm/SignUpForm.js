import React, {useEffect, useState} from "react";
import "./signupform.css"

const SignUpForm = () => {
    const [userName, setUserName] = useState();
    const [teamName, setTeamName] = useState();
    const [userKey, setUserKey] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [isSignUpClicked, setIsSignUpClicked] = useState(false);

    useEffect(() => {
        if (isSignUpClicked) {
            setIsSignUpClicked(false);
        }
    }, [isSignUpClicked]);

    return (
        <form>
            <div className="sign-up-container">
                <div className="sign-up-input-field-container">
                    <label htmlFor="userName" className="sign-up-label">User Name</label>
                    <input
                        name="userName"
                        type="text"
                        onChange={({target}) => setUserName(target.value)}
                        className="sign-up-input-text-field"/>
                </div>
                <div className="sign-up-input-field-container">
                    <label htmlFor="teamName" className="sign-up-label">Team Name</label>
                    <input
                        name="teamName"
                        onChange={({target}) => setTeamName(target.value)}
                        type="text"
                        className="sign-up-input-text-field"/>
                </div>
                <div className="sign-up-input-field-container">
                    <label htmlFor="userKey" className="sign-up-label">User Key</label>
                    <input
                        name="userKey"
                        onChange={({target}) => setUserKey(target.value)}
                        type="text"
                        className="sign-up-input-text-field"/>
                </div>
                <div className="sign-up-input-field-container">
                    <label htmlFor="password" className="sign-up-label">Password</label>
                    <input
                        name="password"
                        onChange={({target}) => setPassword(target.value)}
                        type="password"
                        className="sign-up-input-text-field"/>
                </div>
                <div className="sign-up-input-field-container">
                    <label htmlFor="confirmPassword" className="sign-up-label">Confirm Password</label>
                    <input
                        name="confirmPassword"
                        onChange={({target}) => setConfirmPassword(target.value)}
                        type="password"
                        className="sign-up-input-text-field"/>
                </div>
                <span className="sign-up-button" onClick={() => setIsSignUpClicked(true)}>Sign Up</span>
            </div>
        </form>
    );
}

export default SignUpForm;