import React, {Component} from "react";
import "./currentitem.css"

class StatsView extends Component {
    render() {
        return (
            <div style={{display: 'grid', margin: '20px'}}>
                <table className='tab-bordered'>
                    <caption className='caption-title'>Chris Lynn</caption>
                    <tr>
                        <th className='tab-bordered'>Matches</th>
                        <td className='td-left-padding tab-bordered'>41</td>
                    </tr>
                    <tr>
                        <th className='tab-bordered'>Runs</th>
                        <td className='td-left-padding tab-bordered'>1280</td>
                    </tr>
                    <tr className='tab-bordered'>
                        <th>S/R</th>
                        <td className='td-left-padding tab-bordered'>140.70</td>
                    </tr>
                    <tr>
                        <th className='tab-bordered'>Best</th>
                        <td className='td-left-padding tab-bordered'>93*</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default StatsView