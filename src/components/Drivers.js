import React from 'react';
import driversJson from "../data/drivers.json";
import Driver from './Driver';
import '../App.css';

export default class Drivers extends React.Component {

    constructor() {
        super();
        this.state = {driverItems: driversJson.data};
    }

    render() {

        const driverItemElements = [];
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        for (let i = 0; i < this.state.driverItems.length; i++) {

            let totalActivityDuration = 0;
            let driveDuration = 0;
            let workDuration = 0;
            let availableDuration = 0;
            let restDuration = 0;
            
            let DaysIn = [];

            for (let j = 0; j < this.state.driverItems[i].traces.length; j++) {

                let date = new Date(this.state.driverItems[i].traces[j].date);
                let day = weekday[date.getDay()];

                DaysIn.push(day);

                for (let z = 0; z < this.state.driverItems[i].traces[j].activity.length; z++) {
                    totalActivityDuration += this.state.driverItems[i].traces[j].activity[z].duration;
                    switch (this.state.driverItems[i].traces[j].activity[z].type) {
                        case "drive":
                            driveDuration += this.state.driverItems[i].traces[j].activity[z].duration;
                            break;
                        case "work":
                            workDuration += this.state.driverItems[i].traces[j].activity[z].duration;
                            break;
                        case "available":
                            availableDuration += this.state.driverItems[i].traces[j].activity[z].duration;
                            break;
                        default:
                            restDuration += this.state.driverItems[i].traces[j].activity[z].duration;
                            break;
                    }
                }
            }

            driverItemElements.push(
                <Driver key={this.state.driverItems[i].driverID} driver={this.state.driverItems[i]} daysIn={DaysIn} totalActivityDuration={totalActivityDuration} driveDuration={driveDuration} workDuration={workDuration} availableDuration={availableDuration} restDuration={restDuration}/>
            );
        }

      return (
        <div className='driverContainer'>
            <input className='driverSearchBar' type="text" placeholder="Search for driver"/>
            <table>
                <thead>
                    <tr>
                        <th className='driverTableHeader'>Driver Name</th>
                        <th className='driverTableHeader'>Vehicle Registration</th>
                        <th className='driverTableHeader'>Total Activity Duration</th>
                        <th className='driverTableHeader'>Drive Duration</th>
                        <th className='driverTableHeader'>Work Duration</th>
                        <th className='driverTableHeader'>Available Duration</th>
                        <th className='driverTableHeader'>Rest Duration</th>
                        <th className='driverTableHeader'>Mon</th>
                        <th className='driverTableHeader'>Tue</th>
                        <th className='driverTableHeader'>Wed</th>
                        <th className='driverTableHeader'>Thu</th>
                        <th className='driverTableHeader'>Fri</th>
                        <th className='driverTableHeader'>Sat</th>
                        <th className='driverTableHeader'>Sun</th>
                    </tr>
                </thead>
                <tbody>
                    {driverItemElements}
                </tbody>
            </table>
        </div>
      );
    }
}