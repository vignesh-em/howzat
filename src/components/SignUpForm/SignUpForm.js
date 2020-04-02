import React, {Component} from "react";
import "./signupform.css"

class SignUpForm extends Component {
    render() {
        return (
            <form>
                <div className="sign-up-container">
                    <h4 style={{'text-align': 'center'}}>Signup Container</h4>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                </div>
            </form>
        );
    }
}

export default SignUpForm;