import React, {Component} from "react";
import "./signupform.css"

class SignUpForm extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        console.log(event);
    }

    render() {
        return (
            <form>
                <div className="sign-up-container">
                    <div className="sign-up-input-field-container">
                        <label htmlFor="username" className="sign-up-label">User Name</label>
                        <input name="username" type="text" className="sign-up-input-text-field"/>
                    </div>
                    <div className="sign-up-input-field-container">
                        <label htmlFor="teamname" className="sign-up-label">Team Name</label>
                        <input name="teamname" type="text" className="sign-up-input-text-field"/>
                    </div>
                    <div className="sign-up-input-field-container">
                        <label htmlFor="userkey" className="sign-up-label">User Key</label>
                        <input name="userkey" type="text" className="sign-up-input-text-field"/>
                    </div>
                    <div className="sign-up-input-field-container">
                        <label htmlFor="password" className="sign-up-label">Password</label>
                        <input name="password" type="password" className="sign-up-input-text-field"/>
                    </div>
                    <div className="sign-up-input-field-container">
                        <label htmlFor="confirmpassword" className="sign-up-label">Confirm Password</label>
                        <input name="confirmpassword" type="password" className="sign-up-input-text-field"/>
                    </div>

                    <span className="sign-up-button" onClick={this.handleClick}>Sign Up</span>
                </div>
            </form>
        );
    }
}

export default SignUpForm;