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
                area: '',
            },
            searchResults: mockData.reservations
        }

        this.sortGuestsHandler = this.sortGuestsHandler.bind(this);
        this.filterHandler = this.filterHandler.bind(this);
        this.searchHandler = this.searchHandler.bind(this);
    }

    filterHandler(filter, value) {
        this.setState({
            filters: {...this.state.filters, [filter]: value}, 
        }, this.loopFilters);
    }

    loopFilters() {
        const { filters, reservations } = this.state;
        var results = reservations;
        for(var f in filters) {
            if(Array.isArray(filters[f]) && filters[f].length > 0) {
                results = results.filter(r => {
                    return filters[f].includes(r[f]) ? r : null;
                });
            }
        }

        console.log({results});
        this.setState({
            searchResults: results
        });
    }

    searchHandler(value) {
        const { reservations } = this.state;
        const filterdResults = reservations.filter(r => {
            const { firstName, lastName } = r.customer;

            if(firstName.toLowerCase().includes(value) || lastName.toLowerCase().includes(value)) {
                return r;
            }

            return null;
        });

        this.setState({
            searchResults: filterdResults
        });
    }

    sortGuestsHandler(sortKey) {
        const { sortOrder, searchResults } = this.state;
        let newOrder;

        if ( sortKey === SORTBY_GUESTS ) {
            if(!sortOrder) {
                newOrder = searchResults.sort(( a, b )=> a.quantity - b.quantity);
            }else {
                newOrder = searchResults.sort(( a, b )=> b.quantity - a.quantity);
            }   

        } else if ( sortKey === SORTBY_NAME ) {
            if(!sortOrder) {
                newOrder = searchResults.sort(( a, b )=> {
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
                newOrder = searchResults.sort(( a, b )=> {
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
        const { sortName, sortGuests, reservations, searchResults } = this.state;
        const dates = reservations.map(({businessDate}) => businessDate);

        return (
            <div id="reservationList">
                <h1>Reservation List</h1>
                <Filters 
                    reservationDates={dates}
                    changeHandler={this.filterHandler} 
                    searchHandler={this.searchHandler} />
                <Reservations 
                    data={searchResults} 
                    sortHandler={this.sortGuestsHandler}
                    nameOrder={sortName}
                    guestsOrder={sortGuests} />
            </div>
        )
    }
}

export default ReservationList;