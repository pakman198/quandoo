import './Menu.css';
import React from 'react';

import Icon from '../common/Icon/Icon';

import { MENU } from '../../constants/appConstants';

const NONE = "none";
const STROKE = "#FFFFFF";
const STROKE_WIDTH = 1.5;
const STROKE_LINECAP = "round";
const STROKE_LINEJOIN = "round";

const icons = MENU.filter(item => item.key !== 'logo' ? item : null);
const menuItems = icons.map(({ key, height, path, viewBox, width }, index )=> {
    return (
        <div key={key} className={`menu-item ${key === 2 ? 'active' : ''}`} >
            <Icon 
                fill={NONE}
                height={height}
                stroke={STROKE}
                strokeLinecap={STROKE_LINECAP}
                strokeLinejoin={STROKE_LINEJOIN}
                strokeWidth={STROKE_WIDTH}
                path={path}
                viewBox={viewBox}
                width={width} />
        </div>
    );
});

const Menu = () => {
    return (
        <nav className="menu">
            { menuItems }
        </nav>
    );
}

export default Menu;