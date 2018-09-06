import './Reservations.css';
import React from 'react';

import moment from 'moment';
import { STATUS } from '../../../constants/appConstants';

class Reservations extends React.Component {
    handleGuestNumber = (e) => {
        e.preventDefault();
        alert('CLICK');
    }

    handleGuestName = (e) => {
        e.preventDefault();
        alert('CLICK');
    }

    renderTableHeaders() {
        return (
            <tr>
                <td>&nbsp;</td>
                <th>Status</th>
                <th>Date</th>
                <th>Shift</th>
                <th>
                    <a href="#" onClick={this.handleGuestNumber}>Guest Number</a>
                </th>
                <th>
                    <a href="#" onClick={this.handleGuestName}>Guest Name</a>
                </th>
                <th>Area</th>
                <th>Guest Notes</th>
            </tr>
        );
    }

    renderTableRows() {
        const { data: { reservations }} = this.props;

        return reservations.map(r => {
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
                        { displayName }
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