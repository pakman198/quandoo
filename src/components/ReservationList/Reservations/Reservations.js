import './Reservations.css';
import React from 'react';

import moment from 'moment';
import { STATUS, SORTBY_NAME, SORTBY_GUESTS } from '../../../constants/appConstants';

class Reservations extends React.Component {
    handleGuestClick = (e) => {
        e.preventDefault();
        const { sortHandler } = this.props;
        
        sortHandler(SORTBY_GUESTS);
    }

    handleNameClick = (e) => {
        e.preventDefault();
        const { sortHandler } = this.props;
        
        sortHandler(SORTBY_NAME);
    }

    renderTableHeaders() {
        return (
            <tr>
                <td>&nbsp;</td>
                <th>Status</th>
                <th>Date</th>
                <th>Shift</th>
                <th>
                    <a href="#" onClick={this.handleGuestClick}>Guest Number</a>
                </th>
                <th>
                    <a href="#" onClick={this.handleNameClick}>Guest Name</a>
                </th>
                <th>Area</th>
                <th>Guest Notes</th>
            </tr>
        );
    }

    renderTableRows() {
        const { data } = this.props;

        return data.map(r => {
            const {
                id,
                status,
                businessDate, 
                start, 
                shift, 
                quantity,
                customer: { firstName, lastName },
                area,
                guestNotes
            } = r;
            const stat = STATUS.filter(s => {
                return s.key === status ? s.key : null;
            });
            const { displayName, className } = stat[0];

            return (
                <tr key={id} className="reservation">
                    <td className="check">
                        <input type="checkbox" />
                    </td>
                    <td>
                        <span className={ `status ${className}` }></span>
                        <span className="status-value">{ displayName }</span>
                    </td>
                    <td>{ businessDate }</td>
                    <td>{ `${moment(start).format('HH:mm')} ${shift}` }</td>
                    <td>{ quantity }</td>
                    <td>{ `${lastName}, ${firstName}` }</td>
                    <td>{ area }</td>
                    <td>{ guestNotes ? guestNotes : <span className="notes">No notes</span> }</td>
                </tr>
            )
        }) ;
    }

    render() {
        const tableHeader = this.renderTableHeaders();
        const tableRows = this.renderTableRows();

        return (
            <table className="reservationTable">
                <thead>
                    { tableHeader }
                </thead>
                <tbody>
                    { tableRows }
                </tbody>
            </table>
        );
    }
}

export default Reservations;