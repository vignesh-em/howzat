import React, {Component} from "react";
import "./currentplayer.css";

class CurrentPlayer extends Component {

    state = {
        player: {
            firstName: "",
            lastName: "",
            matches: 0,
            runs: 0,
            strikeRate: 0.00,
            highest: {
                runs: 0,
                notOut: false
            },
            wickets: 0,
            economy: 0.00,
            bestSpell: {
                wickets: 0,
                runs: 0
            }
        },
        currentPrice: 0
    };

    componentDidMount() {
        const newState = {
            player: {
                firstName: "Andre",
                lastName: "Russel",
                matches: 64,
                runs: 1400,
                strikeRate: 186.41,
                highest: {
                    runs: 88,
                    notOut: true
                },
                wickets: 88,
                economy: 8.88,
                bestSpell: {
                    wickets: 4,
                    runs: 20
                }
            },
            currentPrice: 200
        };
        this.setState(newState)
    }

    render() {
        const player = this.state.player;
        const {highest, bestSpell} = player
        return (
            <>
                <div className="price-tag">
                    &#8377;{` ${this.state.currentPrice}L`}
                </div>
                <div className="current-player-name-container">
                    <p className="current-player-first-name">{player.firstName}</p>
                    <p className="current-player-last-name">{player.lastName}</p>
                </div>
                <div className="stats-container">
                    <div className="stat-item">
                        <p className="stat-label">Matches</p>
                        <p className="stat-value">{player.matches}</p>
                    </div>
                    <div className="stat-item">
                        <p className="stat-label">Runs</p>
                        <p className="stat-value">{player.runs}</p>
                    </div>
                    <div className="stat-item">
                        <p className="stat-label">Strike Rate</p>
                        <p className="stat-value">{player.strikeRate}</p>
                    </div>
                    <div className="stat-item">
                        <p className="stat-label">Highest</p>
                        <p className="stat-value">{highest.notOut ? `${highest.runs}*` : highest.runs}</p>
                    </div>
                    <div className="stat-item">
                        <p className="stat-label">Wickets</p>
                        <p className="stat-value">{player.wickets}</p>
                    </div>
                    <div className="stat-item">
                        <p className="stat-label">Economy</p>
                        <p className="stat-value">{player.economy}</p>
                    </div>
                    <div className="stat-item">
                        <p className="stat-label">Best Spell</p>
                        <p className="stat-value">{`${bestSpell.wickets}/${bestSpell.runs}`}</p>
                    </div>
                </div>
            </>
        );
    }
}

export default CurrentPlayer;