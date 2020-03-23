import React, {Component} from "react";
import Header from "../components/Header/Header";
import "./viewer.css"
import Footer from "../components/Footer/Footer";
import CurrentItem from "../components/CurrentItem/CurrentItem";

class Viewer extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className='container-viewer'>
                    <div className='container-main'>

                    </div>

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