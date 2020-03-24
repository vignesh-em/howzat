import React, {Component} from "react";
import Header from "../components/Header/Header";
import "./viewer.css"
import Footer from "../components/Footer/Footer";
import CurrentItem from "../components/CurrentItem/CurrentItem";
import Teams from "../components/Teams/Teams";

class Viewer extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className='container-viewer'>
                    <Teams/>
                    <div className='container-side-info'>
                        <CurrentItem/>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Viewer