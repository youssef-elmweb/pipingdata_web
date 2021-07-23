import React from 'react';

const Img = (props) => {
    const thisSrc = props.src; 
    const thisId = props.id;
    const thisClass = props.className;
    const thisValue = props.value;
    const thisAlt = props.alt;
    const thisStyle = props.style;

    const thisOnLoad = props.displayOnLoad;

    return (
        <img style={thisStyle} onLoad={thisOnLoad} src={thisSrc} id={thisId} className={thisClass} value={thisValue} alt={thisAlt} />
    );

}

export default Img;

