import React, {Component} from "react";
import "./currentitem.css"
import StatsView from "./StatsView";

class CurrentItem extends Component {
    render() {
        return (
            <div className='container-current-item'>
                <StatsView/>
                <div style={{display: 'grid', margin: '20px'}}>
                    <table className='tab-bordered'>
                        <tr>
                            <th className='tab-bordered' colSpan='2'>Current Bid</th>
                        </tr>
                        <tr>
                            <td className='tab-bordered' colSpan='2' style={{'text-align': 'center'}}>&#x20B9;100Cr</td>
                        </tr>
                    </table>
                </div>
                <div style={{display: 'grid', margin: '20px'}}>
                    <table className='tab-bordered'>
                        <tr>
                            <th className='tab-bordered' colSpan='2'>Current Bidder</th>
                        </tr>
                        <tr>
                            <td className='tab-bordered' colSpan='2' style={{'text-align': 'center'}}>Super Kings</td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default CurrentItem