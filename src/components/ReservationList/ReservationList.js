import React from 'react';

import Filters from './Filters/Filters'
import Reservations from './Reservations/Reservations'

import { mockData } from '../../data';

class ReservationList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reservations: mockData
        }
    }

    render() {
        return (
            <div id="reservationList">
                <h1>Reservation List</h1>
                <Filters />
                <Reservations data={mockData}/>
            </div>
        )
    }
}

export default ReservationList;