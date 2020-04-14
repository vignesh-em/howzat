import React, {useState} from "react";
import "./header.css";
import {Link} from "react-router-dom";

const Header = () => {
    const [loggedIn, setLoggedIn] = useState(true);
    const [navItems] = useState(true);

    return (
        <header id="header-main">
            <div id="title-container">
                <h1 id="app-title">howzat?</h1>
                <p id="app-subtitle">auction game</p>
            </div>
            {
                navItems &&
                <nav id="nav-bar">
                    <ul className="header-list">
                        {
                            loggedIn ?
                                <li className="header-nav-item" onClick={() => setLoggedIn(false)}>
                                    <Link to="/">logout</Link>
                                </li> :
                                <li className="header-nav-item">
                                    <Link to="/login">login</Link>
                                </li>
                        }
                    </ul>
                </nav>
            }
        </header>
    );
}

export default Header;