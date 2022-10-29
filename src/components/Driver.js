import React from 'react';

export default function Driver(props) {
    return (
    <tr key={props.driver.driverID}>
        <td className='driverDetails driverName'>{props.driver.forename + " " + props.driver.surname}</td>
        <td className='driverDetails driverVehicleRegistration'>{props.driver.vehicleRegistration}</td>
        <td className='driverDetails driverTotalActivityDuration'>{props.totalActivityDuration}</td>
        <td className='driverDetails driverTotalActivityDuration'>{props.driveDuration}</td>
        <td className='driverDetails driverTotalActivityDuration'>{props.workDuration}</td>
        <td className='driverDetails driverTotalActivityDuration'>{props.availableDuration}</td>
        <td className='driverDetails driverTotalActivityDuration'>{props.restDuration}</td>
        <td className={'dateBox ' + (props.daysIn.includes("Monday") ? "dateBoxGreen" : "")}></td>
        <td className={'dateBox ' + (props.daysIn.includes("Tuesday") ? "dateBoxGreen" : "")}></td>
        <td className={'dateBox ' + (props.daysIn.includes("Wednesday") ? "dateBoxGreen" : "")}></td>
        <td className={'dateBox ' + (props.daysIn.includes("Thursday") ? "dateBoxGreen" : "")}></td>
        <td className={'dateBox ' + (props.daysIn.includes("Friday") ? "dateBoxGreen" : "")}></td>
        <td className={'dateBox ' + (props.daysIn.includes("Saturday") ? "dateBoxGreen" : "")}></td>
        <td className={'dateBox ' + (props.daysIn.includes("Sunday") ? "dateBoxGreen" : "")}></td>
    </tr>
    );
}