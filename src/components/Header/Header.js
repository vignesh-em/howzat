import React, {Component} from "react";
import "./header.css";

class Header extends Component {
    render() {
        return (
            <header id="header-main">
                <div id="title-container">
                    <h1 id="app-title">howzat?</h1>
                    <p id="app-subtitle">auction game</p>
                </div>
                <nav id="nav-bar">
                    <ul className="header-list">
                        <li className="header-nav-item"><a href="#">bidder</a></li>
                        <li className="header-nav-item"><a href="#">auctioneer</a></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;