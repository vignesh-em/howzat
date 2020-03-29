import React, {Component} from "react";
import Header from "../components/Header/Header";
import "./viewer.css"
import Footer from "../components/Footer/Footer";
import CurrentPlayer from "../components/CurrentPlayer/CurrentPlayer";
import Status from "../components/Status/Status";

class Viewer extends Component {
    render() {
        return (
            <>
                <Header/>
                <main className="main-content">
                    <div className="teams-container">
                        {/*
                        <Team/>
                        <Team/>
                        <Team/>
                        <Team/>
                        */}
                    </div>
                    <div className="live-widget-container">
                        <article id="current-player-container">
                            <CurrentPlayer/>
                        </article>
                        <article id="current-status-container">
                            <Status/>
                        </article>
                    </div>
                </main>
                <Footer/>
            </>
        );
    }
}

export default Viewer