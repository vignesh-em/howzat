import React, {Component} from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./login.css";
import SignUpForm from "../components/SignUpForm/SignUpForm";
import SignInForm from "../components/SignInForm/SignInForm";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showSignUp: true
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        const targetId = event.target.id;
        if (targetId === "sign-up") {
            this.setState({
                showSignUp: true
            });
        } else {
            this.setState({
                showSignUp: false
            });
        }
    }

    render() {
        const {showSignUp} = this.state;
        return (
            <>
                <Header showNavItems="false"/>
                <main className="login-content">
                    <div className="login-container">
                        <div className="login-type-chooser">
                            <p id="sign-up"
                               className={showSignUp ? "sign-in-up-text sign-in-up-text-selected" : "sign-in-up-text"}
                               onClick={this.handleClick}>Sign Up</p>
                            <p id="sign-in"
                               className={!showSignUp ? "sign-in-up-text sign-in-up-text-selected" : "sign-in-up-text"}
                               onClick={this.handleClick}>Sign In</p>
                        </div>
                        {
                            showSignUp ? <SignUpForm/> : <SignInForm/>
                        }
                    </div>
                </main>
                <Footer/>
            </>
        );
    }
}

export default Login;