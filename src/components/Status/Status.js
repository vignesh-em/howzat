import React, {Component} from "react";
import "./status.css";

class Status extends Component {
    render() {
        return (
            <p className="live-status">Sold to <span className="status-bought-team-name">Kolkata Knight Riders</span>!
            </p>
        );
    }
}

export default Status;