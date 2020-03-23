import React, {Component} from "react";
import './header.css'

class Header extends Component {
    render() {
        return (
            <header className='header-header'>
                <p className='header-app-name'>Howzat?</p>
                <nav className='nav-container'>
                    <ul className='ul-no-bullets'>
                        <li className='li-nav-bar-item'>Bidder</li>
                        <li className='li-nav-bar-item'>Auctioneer</li>
                        <li className='li-nav-bar-item'>Logout</li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;