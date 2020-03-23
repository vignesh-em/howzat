import React, {Component} from "react";
import Header from "../components/Header/Header";
import "./viewer.css"
import Footer from "../components/Footer/Footer";

class Viewer extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className='container-viewer'>
                    <div className='container-main'>

                    </div>

                    <div className='container-side-info'>

                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Viewer