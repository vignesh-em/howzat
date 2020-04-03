import React, {Component} from "react";
import "./signinform.css";

class SignInForm extends Component {

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
                <div className="sign-in-container">
                    <div className="sign-in-input-field-container">
                        <label htmlFor="username" className="sign-in-label">User Name</label>
                        <input name="username" type="text" className="sign-in-input-text-field"/>
                    </div>
                    <div className="sign-in-input-field-container">
                        <label htmlFor="password" className="sign-in-label">Password</label>
                        <input name="password" type="password" className="sign-in-input-text-field"/>
                    </div>
                    <span className="sign-in-button" onClick={this.handleClick}>Sign In</span>
                </div>
            </form>
        );
    }
}

export default SignInForm;