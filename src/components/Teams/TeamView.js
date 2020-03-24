import React, {Component} from "react";
import "./teams.css"
import "../CurrentItem/currentitem.css"

class TeamView extends Component {
    render() {
        return (
            <div className='team'>
                <p className='caption-title centered'>Delhi Capitals</p>
                <table className='tab-bordered'>
                    <tr>
                        <th className='tab-bordered'>Balance</th>
                    </tr>
                    <tr>
                        <td className='tab-bordered' style={{'text-align': 'center'}}>&#x20B9;100L</td>
                    </tr>
                </table>

                <table className='tab-bordered' style={{'margin-top': '10px'}}>
                    <tr>
                        <td className='tab-bordered'>
                            Vignesh
                        </td>
                    </tr>
                    <tr>
                        <td className='tab-bordered'>
                            Vignesh
                        </td>
                    </tr>
                    <tr>
                        <td className='tab-bordered'>
                            Vignesh
                        </td>
                    </tr>
                    <tr>
                        <td className='tab-bordered'>
                            Vignesh
                        </td>
                    </tr>
                    <tr>
                        <td className='tab-bordered'>
                            Vignesh
                        </td>
                    </tr>
                    <tr>
                        <td className='tab-bordered'>
                            Vignesh
                        </td>
                    </tr>
                    <tr>
                        <td className='tab-bordered'>
                            Vignesh
                        </td>
                    </tr>
                    <tr>
                        <td className='tab-bordered'>
                            Vignesh
                        </td>
                    </tr>
                    <tr>
                        <td className='tab-bordered'>
                            Vignesh
                        </td>
                    </tr>

                </table>
            </div>
        );
    }
}

export default TeamView;