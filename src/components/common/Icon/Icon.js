import './Icon.css';
import React from 'react';

const Icon = (props) => {
    const { path, width, height, fill, viewBox } = props;
    const paths = path.map(p => {
        return (
            <path key={p} fill={fill} d={p}/>
        );
    });
    return (
        <div className="icon">
            <svg width={width} height={height} viewBox={viewBox}>
                {paths}
            </svg>
        </div>
    );
};

export default Icon;
