import React, { Fragment } from 'react';

import Filters from './Filters/Filters'
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
            <Fragment>
                <h1>Reservation List</h1>
                <Filters />
            </Fragment>
        )
    }
}

export default ReservationList;