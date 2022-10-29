import React from 'react';
import driversJson from "../data/drivers.json";

export default class Drivers extends React.Component {

    constructor() {
        super();
        this.state = {driverItems: driversJson.data};
    }

    render() {

        const driverItemElements = [];
        
        for (var i = 0; i < this.state.driverItems.length; i++) {

            var totalActivityDuration = 0;

            for (var j = 0; j < this.state.driverItems[i].traces.length; j++) {
                for (var z = 0; z < this.state.driverItems[i].traces[j].activity.length; z++) {
                    totalActivityDuration += this.state.driverItems[i].traces[j].activity[z].duration;
                }
            }

            driverItemElements.push(
                <tr key={this.state.driverItems[i].driverID}>
                    <td>{this.state.driverItems[i].forename + " " + this.state.driverItems[i].surname}</td>
                    <td>{this.state.driverItems[i].vehicleRegistration}</td>
                    <td>{totalActivityDuration}</td>
                    <td></td>
                </tr>
            );
        }

      return (
        <div className='driverContainer'>
            <input type="text" placeholder="Search for driver"/>
            <table>
                <tbody>
                    {driverItemElements}
                </tbody>
            </table>
        </div>
      );
    }
}