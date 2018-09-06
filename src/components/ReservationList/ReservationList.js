import React from 'react';

import Filters from './Filters/Filters'
import Reservations from './Reservations/Reservations'

import { SORTBY_NAME, SORTBY_GUESTS } from '../../constants/appConstants';
import { mockData } from '../../data';

class ReservationList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reservations: mockData.reservations,
            sortOrder: false,
            filters: {
                status: '',
                date: '',
                shift: '',
                area: ''
            },
            search: ''
        }

        this.sortGuestsHandler = this.sortGuestsHandler.bind(this);
        this.filterHandler = this.filterHandler.bind(this);
    }

    filterHandler() {
        
    }

    searchHandler() {

    }

    sortGuestsHandler(sortKey) {
        const { sortOrder, reservations } = this.state;
        let newOrder;

        if ( sortKey === SORTBY_GUESTS ) {
            if(!sortOrder) {
                newOrder = reservations.sort(( a, b )=> a.quantity - b.quantity);
            }else {
                newOrder = reservations.sort(( a, b )=> b.quantity - a.quantity);
            }   

        } else if ( sortKey === SORTBY_NAME ) {
            if(!sortOrder) {
                newOrder = reservations.sort(( a, b )=> {
                    if (a.customer.lastName < b.customer.lastName) {
                        return -1;
                    }

                    if (a.customer.lastName > b.customer.lastName) {
                    return 1;
                    }
                    
                    // names must be equal
                    return 0;
                });
            }else {
                newOrder = reservations.sort(( a, b )=> {
                    if (a.customer.lastName < b.customer.lastName) {
                        return 1;
                    }

                    if (a.customer.lastName > b.customer.lastName) {
                    return -1;
                    }
                    
                    // names must be equal
                    return 0;
                });
            } 
        }

        this.setState({
            reservations: newOrder,
            sortOrder: !sortOrder
        });
    }

    render() {
        const { sortName, sortGuests } = this.state;
        return (
            <div id="reservationList">
                <h1>Reservation List</h1>
                <Filters changeHandler={this.filterHandler} />
                <Reservations 
                    data={this.state.reservations} 
                    sortHandler={this.sortGuestsHandler}
                    nameOrder={sortName}
                    guestsOrder={sortGuests} />
            </div>
        )
    }
}

export default ReservationList;