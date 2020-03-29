import React, {Component} from "react";
import "./team.css";

class Team extends Component {

    state = {
        players: [],
        teamName: "Chennai Super Kings"
    }

    componentDidMount() {
        const newState = {
            players: [
                {
                    firstName: "MS",
                    lastName: "Dhoni"
                },
                {
                    firstName: "Faf",
                    lastName: "du Plesis"
                },
                {
                    firstName: "Shane",
                    lastName: "Watson"
                },
                {
                    firstName: "DJ",
                    lastName: "Bravo"
                },
                {
                    firstName: "Ravindra",
                    lastName: "Jadeja"
                },
                {
                    firstName: "Murali",
                    lastName: "Vijay"
                },
                {
                    firstName: "Ambati",
                    lastName: "Rayudu"
                },
                {
                    firstName: "Suresh",
                    lastName: "Raina"
                },
                {
                    firstName: "Ravichandran",
                    lastName: "Ashwin"
                },
                {
                    firstName: "Mathew",
                    lastName: "Hayden"
                },
                {
                    firstName: "Deepak",
                    lastName: "Chahar"
                }
            ]
        };
        this.setState(newState)
        console.log(this.state.players)
    }

    render() {
        return (
            <section className="team">
                <h4 className="team-name">{this.state.teamName}</h4>
                <ul className="squad-list">
                    {
                        this.state.players.map((player) => {
                            return this.getPlayerComponent(player);
                        })
                    }
                </ul>
            </section>
        );
    }

    getPlayerComponent(player) {
        return (
            <li className="squad-item-container">
                <p className="squad-item-fn">{player.firstName}</p>
                <p className="squad-item-ln">{player.lastName}</p>
            </li>
        );
    }
}

export default Team;