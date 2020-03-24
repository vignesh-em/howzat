import React, {Component} from "react";
import TeamView from "./TeamView";
import "./teams.css"

class Teams extends Component {
    render() {
        return (
            <div className='team-container'>
                <TeamView/>
                <TeamView/>
                <TeamView/>
                <TeamView/>
                <TeamView/>
            </div>
        );
    }
}

export default Teams