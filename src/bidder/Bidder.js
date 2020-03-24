import React, {Component} from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./bidder.css"
import CurrentItem from "../components/CurrentItem/CurrentItem";
import TeamView from "../components/Teams/TeamView";

class Bidder extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className='container-bidder'>
                    <CurrentItem/>
                    <div className='bidding-area'>
                        <form style={{'display': 'grid'}}>
                            <button className='action-button'>Raise</button>
                        </form>
                        <table className='tab-bordered'>
                            <tr>
                                <th className='tab-bordered'>Players Remaining</th>
                            </tr>
                            <tr>
                                <td className='tab-bordered' style={{'text-align': 'center'}}>24</td>
                            </tr>
                        </table>
                    </div>
                    <TeamView/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Bidder;