import React, {Component} from "react";

class SignInForm extends Component {
    render() {
        return (
            <form>
                <div className="sign-up-container">
                    <h4 style={{'text-align': 'center'}}>Signin Container</h4>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                </div>
            </form>
        );
    }
}

export default SignInForm;