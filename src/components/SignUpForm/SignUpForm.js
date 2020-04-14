import React, {Component} from "react";
import "./signupform.css"

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            teamName: "",
            userKey: "",
            password: "",
            confirmPassword: "",
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick(event) {
        // TODO: Handle click
    }

    handleChange(event) {
        const {target} = event;
        this.setState({
            [target.name]: target.value
        });
    }

    render() {
        return (
            <form>
                <div className="sign-up-container">
                    <div className="sign-up-input-field-container">
                        <label htmlFor="userName" className="sign-up-label">User Name</label>
                        <input
                            name="userName"
                            type="text"
                            onChange={this.handleChange}
                            className="sign-up-input-text-field"/>
                    </div>
                    <div className="sign-up-input-field-container">
                        <label htmlFor="teamName" className="sign-up-label">Team Name</label>
                        <input
                            name="teamName"
                            onChange={this.handleChange}
                            type="text"
                            className="sign-up-input-text-field"/>
                    </div>
                    <div className="sign-up-input-field-container">
                        <label htmlFor="userKey" className="sign-up-label">User Key</label>
                        <input
                            name="userKey"
                            onChange={this.handleChange}
                            type="text"
                            className="sign-up-input-text-field"/>
                    </div>
                    <div className="sign-up-input-field-container">
                        <label htmlFor="password" className="sign-up-label">Password</label>
                        <input
                            name="password"
                            onChange={this.handleChange}
                            type="password"
                            className="sign-up-input-text-field"/>
                    </div>
                    <div className="sign-up-input-field-container">
                        <label htmlFor="confirmPassword" className="sign-up-label">Confirm Password</label>
                        <input
                            name="confirmPassword"
                            onChange={this.handleChange}
                            type="password"
                            className="sign-up-input-text-field"/>
                    </div>

                    <span className="sign-up-button" onClick={this.handleClick}>Sign Up</span>
                </div>
            </form>
        );
    }
}

export default SignUpForm;