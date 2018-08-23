import React from 'react';

const Box = ({color, opacity, height}) => {
    const style = {
        display: 'inline-block',
        backgroundColor: color,
        opacity: opacity,
        height: height,
        transition: 'background-color .2s ease-in'
    }
    
    return <div style={style} /> 
};

export default Box