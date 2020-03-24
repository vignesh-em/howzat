import React, {Component} from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import './auctioneer.css'
import CurrentItem from "../components/CurrentItem/CurrentItem";

class Auctioneer extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className='auctioneer-view'>
                    <CurrentItem/>
                    <div className='buy-sell-container'>
                        <form>
                            <button className='action-button'>Sell</button>
                            <button className='action-button'>Next</button>
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
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Auctioneer