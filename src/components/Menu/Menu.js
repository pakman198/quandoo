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
const menuItems = icons.map(({ height, path, viewBox, width })=> {
    return (
        <Icon 
            key={path[0]}
            className="menu-item"
            fill={NONE}
            height={height}
            stroke={STROKE}
            strokeLinecap={STROKE_LINECAP}
            strokeLinejoin={STROKE_LINEJOIN}
            strokeWidth={STROKE_WIDTH}
            path={path}
            viewBox={viewBox}
            width={width} />
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