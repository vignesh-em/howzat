import React, {Component} from "react";
import "./currentplayer.css";

class CurrentPlayer extends Component {
    render() {
        return (
            <>
                <div className="price-tag">
                    &#8377; 200L
                </div>
                <div className="current-player-name-container">
                    <p className="current-player-first-name">Andre</p>
                    <p className="current-player-last-name">Russel</p>
                </div>
                <div className="stats-container">
                    <div className="stat-item">
                        <p className="stat-label">Matches</p>
                        <p className="stat-value">64</p>
                    </div>
                    <div className="stat-item">
                        <p className="stat-label">Runs</p>
                        <p className="stat-value">1400</p>
                    </div>
                    <div className="stat-item">
                        <p className="stat-label">Strike Rate</p>
                        <p className="stat-value">186.41</p>
                    </div>
                    <div className="stat-item">
                        <p className="stat-label">Highest</p>
                        <p className="stat-value">88*</p>
                    </div>
                    <div className="stat-item">
                        <p className="stat-label">Wickets</p>
                        <p className="stat-value">55</p>
                    </div>
                    <div className="stat-item">
                        <p className="stat-label">Economy</p>
                        <p className="stat-value">8.88</p>
                    </div>
                    <div className="stat-item">
                        <p className="stat-label">Best Spell</p>
                        <p className="stat-value">4/20</p>
                    </div>
                </div>
            </>
        );
    }
}

export default CurrentPlayer;