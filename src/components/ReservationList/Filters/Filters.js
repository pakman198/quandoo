import './Filters.css';
import React from 'react';

import MultiSelect from '../../common/MultiSelect/MultiSelect'

import { STATUS, AREA, SHIFT, CHECKBOX, RADIO } from '../../../constants/appConstants'

class Filters extends React.Component {
    renderDateDropdown() {
        const { reservationDates } = this.props;
        const sorted = reservationDates.sort((a,b) => {
            if (a<b) return -1;
            if (a>b) return 1;
            else return 0;
        });
        const newSet = new Set(sorted);
        const uniqueDates = Array.from(newSet);
        const dates = uniqueDates.map((date, index) => {
            return (
                <option key={index} value={date}>{date}</option>
            );
        });
        const label = (
            <option key={dates.length} value="">Date</option>
        );
        dates.unshift(label);

        return (
            <select className="date-filter" onChange={this.dateFilterHandler}>
                {dates}
            </select>
        );
    }

    filterHandler = (filter, value) => {
        const { changeHandler } = this.props;
        changeHandler(filter, value)
    }

    dateFilterHandler = (e) => {
        const { value } = e.target
        const { changeHandler } = this.props;
        const date = value === "" ? [] : [value]
        changeHandler('businessDate', date);
    }

    searchHandler = (e) => {
        const { value } = e.target;
        const { searchHandler } = this.props;
        
        searchHandler(value);
    }

    render() {
        const status = STATUS.map(({key, displayName}) => {
            return {name: displayName, value: key}
        });
        const shift = SHIFT.map(({key, displayName}) => {
            return {name: displayName, value: key}
        });
        const area = AREA.map(({key, displayName}) => {
            return {name: displayName, value: key}
        });
        const dateFilter = this.renderDateDropdown();

        return(
            <div className="filter-bar">
                <div className="filters">
                    <span>Filter by: </span>
                    <MultiSelect 
                        type={CHECKBOX}
                        options={status}
                        label="Status"
                        groupName="status"
                        changeHandler={this.filterHandler} />
                    {dateFilter}
                    <MultiSelect 
                        type={CHECKBOX}
                        options={shift}
                        label="Shift"
                        groupName="shift"
                        changeHandler={this.filterHandler} />
                    <MultiSelect
                        type={RADIO}
                        options={area}
                        label="Area"
                        groupName="area"
                        changeHandler={this.filterHandler} />
                </div>
                <div className="search-bar">
                    <i className="fas fa-search"></i>
                    <input 
                        type="text" 
                        placeholder="Search Reservation"
                        onChange={this.searchHandler} />
                </div>
            </div>
        )
    }
}

export default Filters;