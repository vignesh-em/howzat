import React, {Component} from "react";
import "./header.css";
import {Link} from "react-router-dom";

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: props.isLoggedIn === "true",
            showNavItems: props.showNavItems === "true"
        }
    }

    componentDidMount() {
        console.log(this.state);
    }

    render() {
        const state = this.state;
        return (
            <header id="header-main">
                <div id="title-container">
                    <h1 id="app-title">howzat?</h1>
                    <p id="app-subtitle">auction game</p>
                </div>
                {
                    state.showNavItems &&
                    <nav id="nav-bar">
                        <ul className="header-list">
                            {
                                state.isLoggedIn ?
                                    <li className="header-nav-item"><a href="#">logout</a></li> :
                                    <li className="header-nav-item"><Link to="/login">login</Link></li>
                            }
                        </ul>
                    </nav>
                }
            </header>
        );
    }
}

export default Header;