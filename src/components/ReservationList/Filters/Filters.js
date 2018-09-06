import './Filters.css';
import React from 'react';

import { CheckboxDropdown } from 'pivotal-ui/react/checkbox-dropdown';

import { STATUS } from '../../../constants/appConstants'

class Filters extends React.Component {


    renderStatus() {
        const status = STATUS.map(s => s.displayName);
        return (
            <CheckboxDropdown {...{
                labels: status
              }} />
        );
    }

    changeHandler = (e) => {
        const { value } = e.target;
        const { searchHandler } = this.props;

        searchHandler(value);
    }

    render() {
        const status = this.renderStatus();
        return(
            <div className="filter-bar">
                <div className="filters">
                    <span>Filter by: </span>
                    { status }
                </div>
                <div className="search-bar">
                    <input 
                        type="text" 
                        placeholder="Search Reservation" 
                        onChange={this.changeHandler} />
                </div>
            </div>
        )
    }
}

export default Filters;