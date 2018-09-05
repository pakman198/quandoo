import './Header.css';
import React from 'react';

import Icon from '../common/Icon/Icon'

import { MENU } from '../../constants/appConstants';

const logo = MENU.filter(item => {
    return 'logo' === item.key ? item : null;
});
const { path, fill, width, height, viewBox } = logo[0]

const Header = () => (
    <header className="header">
        <Icon
            fill={fill}
            height={height}
            path={path}
            viewBox={viewBox}
            width={width} />
    </header>
);

export default Header;