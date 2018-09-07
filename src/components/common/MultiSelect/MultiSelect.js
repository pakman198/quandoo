import './MultiSelect.css';
import React from 'react';

class MultiSelect extends React.Component {
    static defaultProps = {
        type: 'radio',
        options: [
            {name: 'Test 1', value: 1},
            {name: 'Test 2', value: 2},
            {name: 'Test 3', value: 3},
        ],
        label: 'MultiSelect',
        groupName: 'multiselect',
    };

    state = {
        open: false,
        checked: []

    }

    renderOptions() {
        const { options, type, groupName } = this.props;
        const items = options.map(({name, value}, index) => {
            return (
                <li key={index}>
                    <label className="select-option">
                        <input 
                            type={type} 
                            name={`${groupName}[]`} 
                            value={value}
                            onClick={this.optionHandler} />
                        { name }
                    </label>
                </li>
            );
        });

        return items;
    }

    toggleDropdown = () => {
        this.setState({
            open: !this.state.open
        });
    }

    optionHandler = (e) => {
        const { checked } = this.state;
        const { type } = this.props;
        const { value } = e.target;
        let selected;
        console.log({value});

        if( type === 'radio' ) {
            selected = [value];
        }else{
            if (checked.includes(value) ) {
                selected = checked.filter(item => {
                    return value !== item ? item : ''
                });
                console.log({selected});
            }else{
                selected = [...checked, value]
                console.log({selected});
                
            } 
        } 
        
        this.setState({
            checked: selected
        });
    }

    render() {
        const { open } = this.state;
        const { label } = this.props;
        const options = this.renderOptions();

        const active = open ? 'active' : '';
        return (
            <div className="criteria-list">
                <button 
                    type="button" 
                    className={`criteria-selector aui-button aui-button-subtle ${active}`}
                    onClick={this.toggleDropdown} >
                    <div className="criteria-wrap">
                        <div className="searcherValue ">
                            <span className="fieldValue drop-arrow">{label}</span>
                        </div>
                    </div>
                </button>
                <div className={`rm-dropdown-menu ${ open ? 'open' : '' }`} style={{top: 100 +'%'}}>
                    <ul className="dropdown-operation">
                        { options }
                    </ul>
                </div>
            </div>
        );
    }
}

/* MultiSelect.propTypes = {
    type,
    options,
    label,
    changeHandler,
    groupName
} */

export default MultiSelect;