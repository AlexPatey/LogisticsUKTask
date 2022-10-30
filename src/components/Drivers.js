import React from 'react';
import driversJson from "../data/drivers.json";
import Driver from './Driver';
import '../App.css';

export default class Drivers extends React.Component {

    constructor() {
        super();
        this.state = {
            drivers: this.getDrivers("")
        };
    }

    getDrivers(filter) {

        filter = filter.toLowerCase();

        const driverItems = driversJson.data;

        const driverItemElements = [];
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        for (let i = 0; i < driverItems.length; i++) {

            if (filter === "" || ((driverItems[i].forename.toLowerCase() + " " + driverItems[i].surname.toLowerCase()).includes(filter) || driverItems[i].vehicleRegistration.toLowerCase().includes(filter))) {
                let totalActivityDuration = 0;
                let driveDuration = 0;
                let workDuration = 0;
                let availableDuration = 0;
                let restDuration = 0;
                
                let DaysIn = [];

                for (let j = 0; j < driverItems[i].traces.length; j++) {

                    let date = new Date(driverItems[i].traces[j].date);
                    let day = weekday[date.getDay()];

                    DaysIn.push(day);

                    for (let z = 0; z < driverItems[i].traces[j].activity.length; z++) {
                        totalActivityDuration += driverItems[i].traces[j].activity[z].duration;
                        switch (driverItems[i].traces[j].activity[z].type) {
                            case "drive":
                                driveDuration += driverItems[i].traces[j].activity[z].duration;
                                break;
                            case "work":
                                workDuration += driverItems[i].traces[j].activity[z].duration;
                                break;
                            case "available":
                                availableDuration += driverItems[i].traces[j].activity[z].duration;
                                break;
                            default:
                                restDuration += driverItems[i].traces[j].activity[z].duration;
                                break;
                        }
                    }
                }

                driverItemElements.push(
                    <Driver key={driverItems[i].driverID} driver={driverItems[i]} daysIn={DaysIn} totalActivityDuration={totalActivityDuration} driveDuration={driveDuration} workDuration={workDuration} availableDuration={availableDuration} restDuration={restDuration}/>
                );
            }
        }

        return driverItemElements;
    }

    updateDrivers(evt) {
        this.setState({
            drivers: this.getDrivers(evt.target.value),
        })
    }

    render() {

      return (
        <div className='driverContainer'>
            <input id='driverSearchBar' className='driverSearchBar' type="text" placeholder="Search for driver" onChange={evt => this.updateDrivers(evt)}/>
            <table>
                <thead>
                    <tr>
                        <th className='driverTableHeader driverInfoHeader'>Driver Name</th>
                        <th className='driverTableHeader driverInfoHeader'>Vehicle Registration</th>
                        <th className='driverTableHeader driverInfoHeader'>Total Activity Duration</th>
                        <th className='driverTableHeader driverInfoHeader'>Drive Duration</th>
                        <th className='driverTableHeader driverInfoHeader'>Work Duration</th>
                        <th className='driverTableHeader driverInfoHeader'>Available Duration</th>
                        <th className='driverTableHeader driverInfoHeader'>Rest Duration</th>
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
                    {this.state.drivers}
                </tbody>
            </table>
        </div>
      );
    }
}